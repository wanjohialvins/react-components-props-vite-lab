import React from "react";

/**
 * Article component for displaying a single blog post.
 * @param {Object} props
 * @param {string} props.title - The title of the article.
 * @param {string} [props.date="January 1, 1970"] - The date of the article.
 * @param {string} props.preview - The preview text of the article.
 * @returns {JSX.Element}
 */
function Article({ title, date = "January 1, 1970", preview }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;
