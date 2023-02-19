import { useEffect } from "react";
import { fetchPost, deletePost } from "../actions";
import { connect } from "react-redux";

const BlogDetail = ({ blog, match, fetchPost, deletePost }) => {
  const { token, email } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchPost(match.params.id, token);
  }, []);

  return (
    <div>
      {!blog && <div>Loading........</div>}
      {/* {error && <div>failed to fetch</div>}*/}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <b>{blog.author.username}</b>
          <p>{blog.body}</p>
          {blog.author.email === email && (
            <button onClick={() => deletePost(blog.id, token)} type="button">
              delete
            </button>
          )}
        </article>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { blog: state.posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchPost, deletePost })(BlogDetail);
