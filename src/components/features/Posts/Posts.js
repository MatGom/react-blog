import styles from './Posts.module.scss';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { dateToStr } from '../../../utils/dateToStr'

const Posts = () => {
  const posts = useSelector(getAllPosts);

  return (
    <section>
      {posts.map(post => (
        <Card className={styles.card} key={post.id}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              <span className='fw-bold'>Author:</span> {post.author}
            </Card.Text>
            <Card.Text>
              <span className='fw-bold'>Published:</span> {dateToStr(post.publishedDate)}
            </Card.Text>
            <Card.Text>{post.shortDescription}</Card.Text>
            <Card.Link as={NavLink} to={`/post/${post.id}`} className='btn btn-primary px-3'>
              Read more
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </section>
  );
};

export default Posts;
