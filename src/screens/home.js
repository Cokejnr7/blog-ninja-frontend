import BlogList from "../components/bloglist";
import {connect} from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../actions";


const Home = ({fetchPosts,blogs}) => {
    const token = JSON.parse(localStorage.getItem("token"))
    useEffect(()=>{
        fetchPosts(token)
    },[])

    return (
        <div className="home">
            {/* {error && <h2>{error}</h2>} */}
            {!blogs && <h2>Loading.......</h2>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    );
}

const mapStateToProps = (state)=>{
    return {blogs: Object.values(state.posts)}
}

export default connect(mapStateToProps,{fetchPosts})(Home);