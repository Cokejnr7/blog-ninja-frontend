import BlogList from "./bloglist";
import useFetch from "./usefetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/api/posts/');
    return (

        <div className="home">
            {error && <h2>{error}</h2>}
            {isPending && <h2>Loading.......</h2>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    );
}

export default Home;