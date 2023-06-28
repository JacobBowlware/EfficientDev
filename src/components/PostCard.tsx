import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../blogs';

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <Link className="post-card" to={`/blogs/${post.subjectId}/${post.id}`}>
            <img className="post-card-img" src={post.image} alt="" />
            <h1 className="post-card-header">{post.title}</h1>
            <p className="post-card-body">
                {post.description}
            </p>
        </Link>
    );
}

export default PostCard;
