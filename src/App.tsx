import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route, Outlet
} from 'react-router-dom'

// Pages
import Home from './pages/Home'
import FrontEnd from './pages/blogs/FrontEnd';
import BackEnd from './pages/blogs/BackEnd';
import Productivity from './pages/blogs/Productivity';

// CSS
import './css/App.css';
import './css/Home.css';
import './css/Header.css';
import './css/Footer.css';
import './css/PostCard.css';

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blogs/Blog';

// Blogs Posts
import posts from './blogs/index';

function App() {
  const Root = () => {
    return <>
      <Header />
      <Outlet />
      <Footer />
    </>
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/blogs/1" element={<FrontEnd />} />
        <Route path="/blogs/2" element={<BackEnd />} />
        <Route path="/blogs/3" element={<Productivity />} />
        {posts.map((post) => (
          <Route
            key={post.id}
            path={`/blogs/${post.subjectId}/${post.id}`}
            element={
              <Blog
                title={post.title}
                body={post.body}
                author={post.author}
              />
            }
          />
        ))}
      </Route>
    )
  )

  return (
    <div className="web-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
