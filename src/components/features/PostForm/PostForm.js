import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3 w-50'>
        <Form.Label>{actionText}</Form.Label>
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
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
