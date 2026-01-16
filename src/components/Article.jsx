import React from "react";

/**
 * Article Component
 * 
 * Functionality: Renders the details (title, date, preview) of a single post.
 * Connections: Child of ArticleList component.
 * 
 * @param {Object} props
 * @param {string} props.title - Post title.
 * @param {string} [props.date="January 1, 1970"] - Publication date; defaults if empty.
 * @param {string} props.preview - Short preview snippet of the post.
 * @returns {JSX.Element}
 */
function Article({ title, date = "January 1, 1970", preview }) {
    // Logic: Returns a semantic 'article' element containing the post details.
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;
