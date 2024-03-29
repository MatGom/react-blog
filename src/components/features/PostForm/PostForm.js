import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { allCategories } from '../../../redux/categoriesRedux';

const PostForm = ({ action, actionText, ...props }) => {
  const categories = useSelector(allCategories);

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [category, setCategory] = useState(props.categoryId || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      action({ title, author, publishedDate, category, shortDescription, content });
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className='mb-3 w-50'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register('title', { required: true, minLength: 3 })}
          value={title}
          onChange={event => setTitle(event.target.value)}
          type='text'
          placeholder='Enter title'
        />
        {errors.title && <small className='d-block form-text text-danger mt-2'>Title is too short (min is 3)</small>}
      </Form.Group>

      <Form.Group className='mb-3 w-50'>
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register('author', { required: true, minLength: 3 })}
          value={author}
          onChange={event => setAuthor(event.target.value)}
          type='text'
          placeholder='Enter author'
        />
        {errors.author && (
          <small className='d-block form-text text-danger mt-2'>Author's name is too short (min is 3)</small>
        )}
      </Form.Group>

      <Form.Group className='mb-3 w-50'>
        <Form.Label>Published date</Form.Label>
        <DatePicker selected={publishedDate} onChange={date => setPublishedDate(date)} />
        {dateError && <small className='d-block form-text text-danger mt-2'>Choose date</small>}
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Category</Form.Label>
        <Form.Select
          {...register('category', { required: true })}
          as='select'
          onChange={e => setCategory(e.target.value)}
          value={category}
          aria-label='Default select example'>
          <option value='' disabled selected>
            Select category...
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>
        {errors.category && <small className='d-block form-text text-danger mt-2'>Choose category</small>}
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Short description</Form.Label>
        <Form.Control
          {...register('shortDescription', { required: true, minLength: 20 })}
          value={shortDescription}
          onChange={event => setShortDescription(event.target.value)}
          as='textarea'
          placeholder='Leave a comment here'
          style={{ height: '100px' }}
        />
        {errors.shortDescription && (
          <small className='d-block form-text text-danger mt-2'>
            Description should contain at least 20 characters{' '}
          </small>
        )}
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Main content</Form.Label>
        <ReactQuill value={content} onChange={setContent} />
        {contentError && <small className='d-block form-text text-danger mt-2'>Content can't be empty</small>}
      </Form.Group>

      <Button variant='primary' type='submit' className='mb-3'>
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
