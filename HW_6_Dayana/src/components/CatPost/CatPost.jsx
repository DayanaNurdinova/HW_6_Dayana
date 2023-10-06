import React, { useState } from 'react';

function CatPost({ post, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(post.title);
    const [editedDescription, setEditedDescription] = useState(post.description);

    const handleEdit = () => {
        onEdit(post.id, editedTitle, editedDescription);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <textarea
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                    />
                    <button onClick={handleEdit}>Сохранить</button>
                </div>
            ) : (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <button onClick={() => onDelete(post.id)}>Удалить</button>
                    <button onClick={() => setIsEditing(true)}>Редактировать</button>
                </div>
            )}
        </div>
    );
}

export default CatPost;
