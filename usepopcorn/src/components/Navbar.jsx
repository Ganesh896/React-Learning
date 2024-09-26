import SearchInput from "./SearchInput";
import PropTypes from "prop-types";

const Navbar = ({ movies }) => {
    return (
        <nav className="nav-bar">
            <div className="logo">
                <span role="img">🍿</span>
                <h1>usePopcorn</h1>
            </div>
            <SearchInput />
            <p className="num-results">
                Found <strong>{movies.length}</strong> results
            </p>
        </nav>
    );
};

Navbar.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default Navbar;
