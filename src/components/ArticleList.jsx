import React from "react";
import Article from "./Article";

/**
 * ArticleList component that renders a list of Article components.
 * @param {Object} props
 * @param {Array} props.posts - Array of post objects.
 * @returns {JSX.Element}
 */
function ArticleList({ posts }) {
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
