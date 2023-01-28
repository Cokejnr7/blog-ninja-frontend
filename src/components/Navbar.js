import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../actions";

const Navbar = ({signOut}) => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>
            </div>
            <button className="log" onClick={signOut}>Logout</button>
        </nav>
    );
}

export default connect(null,{signOut})(Navbar);


// dynamic styling
// style={{ color: "white", backgroundColor: "#f1356d", borderRadius: "8px" }}