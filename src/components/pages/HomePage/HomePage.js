import Button from 'react-bootstrap/Button';
import Posts from '../../features/Posts/Posts';

const HomePage = () => {
  return (
    <article>
      <div className='d-flex space-between'>
        <h2 className='me-auto'>All posts</h2>
        <Button variant='outline-info px-3'>Add post</Button>
      </div>
      <Posts />
    </article>
  );
};

export default HomePage;
