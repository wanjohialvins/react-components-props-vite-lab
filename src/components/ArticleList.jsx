import React from "react";
import Article from "./Article";

/**
 * ArticleList Component
 * 
 * Functionality: Houses the collection of blog articles.
 * Connections: Child of App, Parent to multiple Article components.
 * 
 * @param {Object} props
 * @param {Array} props.posts - Array of post objects to render.
 * @returns {JSX.Element}
 */
function ArticleList({ posts }) {
    // Logic: Maps through the posts array to transform each post object into an Article component.
    // Each Article is given a unique 'key' using the post's ID for React's reconciliation.
    const articles = posts.map((post) => (
        <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
        />
    ));

    return <main>{articles}</main>;
}

export default ArticleList;
