import React from "react";

/**
 * Header Component
 * 
 * Functionality: Renders the top-level branding for the blog.
 * Connections: Child of the App component.
 * 
 * @param {Object} props
 * @param {string} props.name - The dynamic name of the blog.
 * @returns {JSX.Element}
 */
function Header({ name }) {
    // Logic: Simply displays the blog name in an H1 tag within a semantic header element.
    return (
        <header>
            <h1>{name}</h1>
        </header>
    );
}

export default Header;
