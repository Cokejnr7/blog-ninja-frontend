import { useEffect } from "react";
import { fetchPost } from "../actions";
import { connect } from "react-redux";



const BlogDetail = ({blog,match,fetchPost,user} ) => {
    
    const token = JSON.parse(localStorage.getItem("token"))

    useEffect(() => {
       fetchPost(match.params.id,token)

    },[])


    return (
        <div>
            {!blog && <div>Loading........</div>}
            {/* {error && <div>failed to fetch</div>}*/}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <b>{blog.author.username}</b>
                    <p>{blog.body}</p>
                    {blog.author.email === user.email &&<button >delete</button>}
                </article>
            )} 
        </div>
    );
}

const mapStateToProps = (state,ownProps)=>{
    return {blog:state.posts[ownProps.match.params.id],user:state.auth.user}
}

export default connect(mapStateToProps,{fetchPost})(BlogDetail);