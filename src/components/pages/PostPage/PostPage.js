import styles from './PostPage.module.scss';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { useParams } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));
  console.log(postData);

  return (
    <article className={styles.postPage}>
      <div className={styles.postPageWrapper}>
        <div className={styles.postPageHeader}>
          <h2>{postData.title}</h2>
          <div>
            <Link as={NavLink} to='/post/edit/:id' className='btn btn-outline-info px-3 ms-2'>
              Edit
            </Link>
            <Link as={NavLink} to='*' className='btn btn-outline-danger px-3 ms-2'>
              Delete
            </Link>
          </div>
        </div>
        <div className={styles.postPageInfo}>
          <p className={styles.postPageAuthor}>
            <span>Author:</span> {postData.author}
          </p>
          <p>
            <span>Published:</span> {postData.publishedDate}
          </p>
        </div>
        <p>{postData.content}</p>
      </div>
    </article>
  );
};

export default PostPage;
