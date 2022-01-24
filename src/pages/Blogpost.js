import React from 'react';
import posts from './../data/posts.json'
import {useParams} from "react-router-dom";

function Blogpost () {

    const {blogId} = useParams()
    const currentPost = posts.find((postId) => {
        return postId.id === blogId;
    });

    return (
        <div>
            <h1>Blog: {currentPost.title}</h1>
            <h4>{currentPost.date}</h4>
            <p>{currentPost.content}</p>

        </div>
    );
}

export default Blogpost;