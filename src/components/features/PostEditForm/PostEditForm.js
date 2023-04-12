import { useSelector } from 'react-redux';
import { getPostById} from '../../../redux/postsRedux';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { editPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';
import { useDispatch } from 'react-redux';

const PostEditForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const editedData = useSelector((state) => getPostById(state, id));

  const handleEditPost = post => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  };

  if (!editedData) {
    return <Navigate to='/' />;
  } else {
    return (
      <PostForm
        action={handleEditPost}
        actionText='Edit post'
        title={editedData.title}
        author={editedData.author}
        publishedDate={editedData.publishedDate}
        shortDescription={editedData.shortDescription}
        content={editedData.content}
        id={id}
      />
    );
  }
};

export default PostEditForm;
