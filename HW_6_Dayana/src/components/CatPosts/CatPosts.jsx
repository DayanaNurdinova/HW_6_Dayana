import React from 'react';
import CatPost from '../CatPost/CatPost.jsx';

function CatPosts({ posts, onDelete, onEdit }) {
    return (
        <div>
            {posts.map((post) => (
                <CatPost
                    key={post.id}
                    post={post}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
}

export default CatPosts;
