import React from "react";

/**
 * Header component for the blog.
 * @param {Object} props
 * @param {string} props.name - The name of the blog.
 * @returns {JSX.Element}
 */
function Header({ name }) {
    return (
        <header>
            <h1>{name}</h1>
        </header>
    );
}

export default Header;
