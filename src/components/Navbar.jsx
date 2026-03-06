    import { Link } from "react-router-dom";

    function Navbar() {
    return (
        <nav className="navbar">
        <div className="navbar-container">

            <h1 className="logo">CineStream</h1>

            <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
            </div>

        </div>
        </nav>
    );
    }

    export default Navbar;