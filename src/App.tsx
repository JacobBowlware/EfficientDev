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
import './css/CatCard.css';

// Components
import Header from './components/Header'
import Footer from './components/Footer'

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
        <Route path="/blogs/frontend" element={<FrontEnd />} />
        <Route path="/blogs/backend" element={<BackEnd />} />
        <Route path="/blogs/productivity" element={<Productivity />} />
        <Route path="*" element={<Home />} />
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
