import React from "react";

/**
 * About component for the blog sidebar.
 * @param {Object} props
 * @param {string} [props.image="https://via.placeholder.com/215"] - The image URL for the blog logo.
 * @param {string} props.about - The about text for the blog.
 * @returns {JSX.Element}
 */
function About({ image = "https://via.placeholder.com/215", about }) {
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    );
}

export default About;
