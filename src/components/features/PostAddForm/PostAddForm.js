import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PostAddForm = () => {
  return (
    <Form>
      <Form.Group className='mb-3 w-50'>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' placeholder='Enter title' />
      </Form.Group>

      <Form.Group className='mb-3 w-50'>
        <Form.Label>Author</Form.Label>
        <Form.Control type='text' placeholder='Enter author' />
      </Form.Group>

      <Form.Group className='mb-3 w-50'>
        <Form.Label>Published date</Form.Label>
        <Form.Control type='date' className='text-muted' />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Short description</Form.Label>
        <Form.Control as='textarea' placeholder='Leave a comment here' style={{ height: '100px' }} />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Main content</Form.Label>
        <Form.Control as='textarea' placeholder='Leave a comment here' style={{ height: '100px' }} />
      </Form.Group>

      <Button variant='primary' type='submit' className='mb-3'>
        Add post
      </Button>
    </Form>
  );
};

export default PostAddForm;
