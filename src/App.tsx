import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route, Outlet
} from 'react-router-dom'

// Prism
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Import the Prism.js CSS file
import 'prismjs/components/prism-javascript'; // Import the JavaScript language module
import 'prismjs/components/prism-css'; // Import the CSS language module

// Pages
import Home from './pages/Home'
import FrontEnd from './pages/blogPages/FrontEnd';
import BackEnd from './pages/blogPages/BackEnd';
import Productivity from './pages/blogPages/Productivity';

// CSS
import './css/App.css';
import './css/Home.css';
import './css/Header.css';
import './css/Footer.css';
import './css/PostCard.css';
import './css/Blog.css';

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/blogComponents/Blog';

// Blogs Posts
import posts from './blogs/index';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const Root = () => {
    return <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  }

  // Initialize Prism.js
  Prism.highlightAll();

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
                date={post.date}
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
