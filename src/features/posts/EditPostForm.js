import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postUpdated } from './postSlice';

function EditPostForm() {
    const { postId } = useParams();
    const post = useSelector(state => state.posts.find(post => post.id === postId));
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onTitleChanged = (e) => {
        setTitle(e.target.value);
    }

    const onContentChanged = (e) => {
        setContent(e.target.value);
    }

    const onSavePostClicked = (e) => {
        console.log('onSavePostClicked');
        dispatch(postUpdated({id: postId, title, content}));
        navigate(`/posts/${postId}`);
    }

    // useEffect(() => {
    // }, [postId]);

    return (
        <section>
            <h2>Edit Post</h2>
            
            <form className='form-create-post'>
            <label htmlFor="postTitle">Post Title:</label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              value={title}
              onChange={onTitleChanged}
            />
            <label htmlFor="postContent">Content:</label>
            <textarea
              id="postContent"
              name="postContent"
              value={content}
              onChange={onContentChanged}
            />
            <button type="button" onClick={ onSavePostClicked }>Edid Post</button>
          </form>
        </section>
    )
}

export default EditPostForm