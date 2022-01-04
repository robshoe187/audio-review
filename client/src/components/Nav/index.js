import React from "react";
import "./style.css";

const Nav = () => {

    return(
        <div className="text-center d-flex justify-content-center py-2">
            <a href="/" className="px-2 text-decoration-none nav-link">Home</a>
            <a href="/" className="px-2 text-decoration-none nav-link">Reviews</a>
            <a href="/" className="px-2 text-decoration-none nav-link">News</a>
            <a href="/" className="px-2 text-decoration-none nav-link">About</a>
        </div>
    );
}

export default Nav;