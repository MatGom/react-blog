import Posts from '../../features/Posts/Posts';
import { Link, NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <article>
      <div className='d-flex space-between'>
        <h2 className='me-auto'>All posts</h2>
        <Link as={NavLink} to='/post/add' className='btn btn-outline-info px-3'>
          Add post
        </Link>
      </div>
      <Posts />
    </article>
  );
};

export default HomePage;
