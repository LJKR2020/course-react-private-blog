import React from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";

function Overview() {


    return (
        <>
            <h1>Overzicht van alle blogs</h1>
            <h3>Er zijn in totaal {posts.length} blogs geschreven.</h3>

            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>
                        <Link to={`/blogposts/${post.id}`}>
                        {post.title}</Link>
                    </li>
                })}
            </ul>
        </>
    )
}

Overview();

export default Overview;
