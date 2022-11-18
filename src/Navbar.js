import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Navbar = () => {
    const history = useHistory();
    const logout = ()=>{
       localStorage.removeItem("token");
        history.push("/login");
    }
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>
            </div>
            <button className="log" onClick={logout}>Logout</button>
        </nav>
    );
}

export default Navbar;


// dynamic styling
// style={{ color: "white", backgroundColor: "#f1356d", borderRadius: "8px" }}