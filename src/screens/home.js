import BlogList from "../components/bloglist";
import useFetch from "../usefetch";
import {connect} from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../actions";


const Home = (props) => {
    const token = JSON.parse(localStorage.getItem("token"))
    useEffect(()=>{
        props.fetchPosts(token)
    },[])

    return (
        <div className="home">
            {/* {error && <h2>{error}</h2>} */}
            {!props.blogs && <h2>Loading.......</h2>}
            {props.blogs && <BlogList blogs={props.blogs} title="All blogs" />}
        </div>
    );
}

const mapStateToProps = (state)=>{
    return {token: state.auth.token,blogs: Object.values(state.posts)}
}

export default connect(mapStateToProps,{fetchPosts})(Home);