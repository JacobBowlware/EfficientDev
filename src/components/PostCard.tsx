import React from 'react';

import manSitting from '../assets/man-sitting.svg';
import { Link } from 'react-router-dom';

interface Post {
    title: string;
    description: string;
    image: string;
    link: string;
}

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <Link className="post-card" to={post.link}>
            <img className="post-card-img" src={post.image} alt="" />
            <h1 className="post-card-header">{post.title}</h1>
            <p className="post-card-body">
                {post.description}
            </p>
        </Link>
    );
}

export default PostCard;
