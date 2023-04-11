import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import shortid from 'shortid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostAddForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmitPost = event => {
    event.preventDefault();
    dispatch(addPost({ title, author, publishedDate, shortDescription, content, id: shortid() }));
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmitPost}>
      <Form.Group className='mb-3 w-50'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={event => setTitle(event.target.value)}
          type='text'
          placeholder='Enter title'
        />
      </Form.Group>

      <Form.Group className='mb-3 w-50'>
        <Form.Label>Author</Form.Label>
        <Form.Control
          value={author}
          onChange={event => setAuthor(event.target.value)}
          type='text'
          placeholder='Enter author'
        />
      </Form.Group>

      <Form.Group className='mb-3 w-50'>
        <Form.Label>Published date</Form.Label>
        <Form.Control
          value={publishedDate}
          onChange={event => setPublishedDate(event.target.value)}
          type='text'
          placeholder='Enter date'
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Short description</Form.Label>
        <Form.Control
          value={shortDescription}
          onChange={event => setShortDescription(event.target.value)}
          as='textarea'
          placeholder='Leave a comment here'
          style={{ height: '100px' }}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Main content</Form.Label>
        <Form.Control
          value={content}
          onChange={event => setContent(event.target.value)}
          as='textarea'
          placeholder='Leave a comment here'
          style={{ height: '100px' }}
        />
      </Form.Group>

      <Button variant='primary' type='submit' className='mb-3'>
        Add post
      </Button>
    </Form>
  );
};

export default PostAddForm;
