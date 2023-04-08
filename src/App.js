import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import HomePage from './components/pages/HomePage/HomePage';
import PostPage from './components/pages/PostPage/PostPage';
import PostAddPage from './components/pages/PostAddPage/PostAddPage';
import PostEditPage from './components/pages/PostEditPage/PostEditPage';
import AboutPage from './components/pages/AboutPage/AboutPage';
import NotFound from './components/pages/NotFound/NotFound';
import Footer from './components/views/Footer/Footer';

function App() {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/post/add' element={<PostAddPage />} />
          <Route path='/post/edit/:id' element={<PostEditPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
