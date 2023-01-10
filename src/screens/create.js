import { useState } from "react";
import { createPost } from "../actions";
import {connect}  from "react-redux";


const Create = ({createPost}) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [isPending, setIsPending] = useState(false);
    const token = JSON.parse(localStorage.getItem("token"));

    function handleClick(e) {
        e.preventDefault();
        const blog = { title, body };

        setIsPending(true)
        createPost(blog,token)

    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={(e) => { handleClick(e) }}>
                <label htmlFor="title">Title</label>
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} id="title" required />
                <label htmlFor="body">body</label>
                <textarea cols={50} rows={10} type="text" value={body} onChange={(e) => { setBody(e.target.value) }} id="body" required />
                <button type="submit">Create Blog</button>
                {/* {isPending ? <button disabled>Loading....</button> : <button>Create Blog</button>} */}
            </form>
        </div>
    );
}

export default connect(null,{createPost})(Create);