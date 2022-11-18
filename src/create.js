import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        const blog = { title, body };

        setIsPending(true)

        fetch('http://localhost:8000/api/posts/', {
            method: 'POST',
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
            .then(() => {
                setIsPending(false);
                console.log('blog created');
                history.push('/');
            })
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={(e) => { handleClick(e) }}>
                <label htmlFor="title">Title</label>
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} id="title" required />
                <label htmlFor="body">body</label>
                <textarea cols={50} rows={10} type="text" value={body} onChange={(e) => { setBody(e.target.value) }} id="body" required />
                {isPending ? <button disabled>Loading....</button> : <button>Create Blog</button>}
            </form>
        </div>
    );
}

export default Create;