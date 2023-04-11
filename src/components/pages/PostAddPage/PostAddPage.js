import styles from './PostAddPage.module.scss';
import PostAddForm from '../../features/PostAddForm/PostAddForm';

const PostAddPage = props => {
  console.log(props);
  return (
    <article className={styles.postAddPage}>
      <div className={styles.postAddWrapper}>
        <h2>Add post</h2>
        <PostAddForm />
      </div>
    </article>
  );
};

export default PostAddPage;
