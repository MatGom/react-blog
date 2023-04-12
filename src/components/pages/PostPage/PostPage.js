import styles from './PostPage.module.scss';
import { useSelector } from 'react-redux';
import { getPostById, removePost } from '../../../redux/postsRedux';
import { useParams } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import DeletePostModal from '../../features/DeletePostModal/DeletePostModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const PostPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRemovePost = () => {
    dispatch(removePost(postData.id));
    setShowModal(false);
    console.log('click');
  };

  if (showModal)
    return <DeletePostModal removePost={handleRemovePost} showModal={handleShowModal} closeModal={handleCloseModal} />;

  if (!postData) {
    return <Navigate to='/' />;
  } else
    return (
      <article className={styles.postPage}>
        <div className={styles.postPageWrapper}>
          <div className={styles.postPageHeader}>
            <h2>{postData.title}</h2>
            <div>
              <Link as={NavLink} to={`/post/edit/${postData.id}`} className='btn btn-outline-info px-3 ms-2'>
                Edit
              </Link>
              <Button onClick={handleShowModal} variant='outline-danger' className='px-3 ms-2'>
                Delete
              </Button>
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
