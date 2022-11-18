import { Link } from "react-router-dom";



const BlogList = ({ blogs, title }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h2><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></h2>
                        <p>Written by {blog.author.email}</p>
                    </div>
                )
            })}
        </div >);
}

export default BlogList;