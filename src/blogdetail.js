import { useHistory, useParams } from "react-router-dom";
import useFetch from "./usefetch";
const BlogDetail = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/api/posts/' + id);
    const history = useHistory();
    function handleClick() {
        fetch('http://localhost:8000/api/posts/' + blog.id, {
            method: "DELETE"
        }).then(history.push('/'));
    }
    console.log(blog)
    return (
        <div>
            {isPending && <div>Loading........</div>}
            {error && <div>failed to fetch</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <b>{blog.author.email}</b>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetail;