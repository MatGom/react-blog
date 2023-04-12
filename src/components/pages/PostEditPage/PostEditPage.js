import styles from './PostEditPage.module.scss';
import PostEditForm from '../../features/PostEditForm/PostEditForm';

const PostEditPage = () => {
  return (
    <article className={styles.postEditPage}>
      <div className={styles.postEditWrapper}>
        <h2>Edit post</h2>
        <PostEditForm />
      </div>
    </article>
  );
};

export default PostEditPage;
