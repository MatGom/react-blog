import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import PostPage from './components/pages/PostPage/PostPage';
import PostAddPage from './components/pages/PostAddPage/PostAddPage';
import PostEditPage from './components/pages/PostEditPage/PostEditPage';
import AboutPage from './components/pages/AboutPage/AboutPage';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/post/add' element={<PostAddPage />} />
        <Route path='/post/edit/:id' element={<PostEditPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
