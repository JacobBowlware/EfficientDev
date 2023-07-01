
// Assets
import EfficientDevLogo from '../assets/EfficientDevLogo.svg';
import FrontEndImg from '../assets/FrontEndImg.svg';
import BackEndImg from '../assets/BackEndImg.svg';
import ProductivityImg from '../assets/ProductivityImg.svg';

// Components
import PostCard from '../components/PostCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// Posts
import frontEndPosts from '../blogs/frontend';
import backEndPosts from '../blogs/backend';
import productivityPosts from '../blogs/productivity';
import { Link } from 'react-router-dom';

let posts = [
    ...frontEndPosts,
    ...backEndPosts,
    ...productivityPosts
]

/*
TODO:
- Add an aesthetic 'Back to Top' Link
*/
const Home = () => {
    return (
        <>
            <div className="web-section-grid home-hero" id="hero">
                <div className="web-section-grid__item home-hero__item">
                    <h1 className="web-section-header home-hero-header">
                        Efficient<span className="text-highlight">Dev</span>
                    </h1>
                    <h2 className="web-section-subheader home-hero-body">
                        A collection of blogs and tutorials to help you become a better developer.
                    </h2>
                    <ul className="web-section__list">
                        <li className="web-section__list-item">
                            <FontAwesomeIcon icon={faCheck} className="web-section__list-icon-large" /> Learn New Technologies
                        </li>
                        <li className="web-section__list-item">
                            <FontAwesomeIcon icon={faCheck} className="web-section__list-icon-large" /> Boost Your Productivity
                        </li>
                        <li className="web-section__list-item">
                            <FontAwesomeIcon icon={faCheck} className="web-section__list-icon-large" /> Follow Along With Tutorials
                        </li>
                    </ul>
                    <a href="/#posts" className="btn web-section-btn home-hero__btn">
                        Start Developing
                    </a>
                </div>
                <div className="web-section-grid__item">
                    <img className="web-section__item-img" src={EfficientDevLogo} alt="" />
                </div>
            </div>
            <div className="web-section-cont-dark" id="posts">
                <div className="web-section">
                    <div className="web-section__item home-hero__item">
                        <h2 className="web-section-header home-posts-header">
                            Recent <span className="text-highlight">Posts</span>
                        </h2>
                    </div>
                    <div className="home-posts-container">
                        {
                            posts.slice(0, 6).map((post, index) => {
                                return (
                                    <PostCard key={index} post={post} />
                                )
                            })}
                    </div>
                </div>
            </div>
            <div className="web-section category-container">
                <h2 className="web-section-header category-header">
                    <span className="text-highlight">Blog</span> Categories
                </h2>
                <div className="category-grid">
                    <div className="web-section-grid__item">
                        <h2 className="web-section-header category-subheader">
                            Front-End <span className="text-highlight">Development</span>
                        </h2>
                        <p className="web-section-body">
                            Learn about the latest front-end technologies and
                            how to use them to build modern web applications. Some common topics include:
                            HTML, CSS, JavaScript, ReactJS, and more.
                        </p>
                        <p className="web-section-body">
                            Whether you are just starting out or are an experienced developer,
                            there is something here for you to learn.
                        </p>
                        <Link to="/blogs/1/" className="btn web-section-btn home-hero__btn">
                            View Posts
                        </Link>
                    </div>
                    <div className="web-section-grid__item">
                        <img className="web-section__item-img" src={FrontEndImg} alt="" />
                    </div>
                </div>
                <div className="category-grid">
                    <div className="web-section-grid__item">
                        <h2 className="web-section-header category-subheader">
                            Back-End <span className="text-highlight">Development</span>
                        </h2>
                        <p className="web-section-body">
                            Learn about the most popular back-end technologies and
                            how to use them to build modern web applications. Some common topics include:
                            NodeJS, ExpressJS, MongoDB, and more.
                        </p>
                        <p className="web-section-body">
                            Back-end development can be intimidating, but it doesn't have to be.
                            Here you will find tutorials and guides to help you get started.
                        </p>
                        <Link to="/blogs/2/" className="btn web-section-btn home-hero__btn">
                            View Posts
                        </Link>
                    </div>
                    <div className="web-section-grid__item">
                        <img className="web-section__item-img" src={BackEndImg} alt="" />
                    </div>
                </div>
                <div className="category-grid">
                    <div className="web-section-grid__item">
                        <h2 className="web-section-header category-subheader">
                            Productivity
                        </h2>
                        <p className="web-section-body">
                            Learn how to be more productive and efficient with your time as
                            a developer. Some common topics include: time management,
                            organization, habit building, and more.
                        </p>
                        <p className="web-section-body">
                            Being productive is a skill that can be learned and improved upon.
                            Here you will find tips and tricks to help you become a more productive developer.
                        </p>
                        <Link to="/blogs/3/" className="btn web-section-btn home-hero__btn">
                            View Posts
                        </Link>
                    </div>
                    <div className="web-section-grid__item">
                        <img className="web-section__item-img" src={ProductivityImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;