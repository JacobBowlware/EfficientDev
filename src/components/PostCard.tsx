import React from 'react';

import manSitting from '../assets/man-sitting.svg';

interface Post {
    title: string;
    description: string;
    date: string;
}

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div className="post-card">
            <img className="post-card-img" src={manSitting} alt="" />
            <h1 className="post-card-header">{post.title}</h1>
            <p className="post-card-body">
                {post.description}
            </p>
        </div>
    );
}

export default PostCard;
