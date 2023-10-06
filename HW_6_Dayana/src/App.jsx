import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CatPosts from '../src/components/CatPosts/CatPosts.jsx';

function CatApp() {
    const [posts, setPosts] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    useEffect(() => {
        axios.get('https://cataas.com/api/cats?limit=10&skip=0')
            .then((response) => setPosts(response.data))
            .catch((error) => console.error(error));
    }, []);

    const handleDelete = (postId) => {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
    };

    const handleEdit = (postId, editedTitle, editedDescription) => {
        const updatedPosts = posts.map((post) => {
            if (post.id === postId) {
                return {
                    ...post,
                    title: editedTitle,
                    description: editedDescription,
                };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    const handleAdd = () => {
        if (newTitle && newDescription) {
            const newPost = {
                id: Date.now(),
                title: newTitle,
                description: newDescription,
            };
            setPosts([...posts, newPost]);
            setNewTitle('');
            setNewDescription('');
        }
    };

    return (
        <div>
            <h1>Посты с фотографиями котиков</h1>
            <div>
                <input
                    type="text"
                    placeholder="Заголовок"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <textarea
                    placeholder="Описание"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                />
                <button onClick={handleAdd}>Добавить пост</button>
            </div>
            <CatPosts posts={posts} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
    );
}

export default CatApp;
