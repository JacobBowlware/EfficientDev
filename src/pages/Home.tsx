import { Link } from 'react-router-dom';

// Assets
import manSitting from '../assets/man-sitting.svg';
import EfficientDevLogo from '../assets/EfficientDevLogo.svg';

// Components
import PostCard from '../components/PostCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

let posts = [
    {
        title: "How to use React Router",
        description: "A quick tutorial on how to use React Router to create a single page application.",
        date: "2021-05-01",
    },
    {
        title: "What is React?",
        description: "A quick tutorial on how to use React Router to create a single page application.",
        date: "2023-02-20",
    },
    {
        title: "What is TypeScript?",
        description: "A quick tutorial on how to use React Router to create a single page application.",
        date: "2022-10-14",
    },
    {
        title: "Simple React Tutorial",
        description: "A quick tutorial on how to use React Router to create a single page application.",
        date: "2021-05-01",
    },
    {
        title: "What is the MERN Stack?",
        description: "A quick tutorial on how to use React Router to create a single page application.",
        date: "2021-05-01",
    },
    {
        title: "Is Firebase worth it?",
        description: "A quick tutorial on how to use React Router to create a single page application.",
        date: "2021-05-01",
    }
]

// TODO:
// Replace the hero img with a bullet list card of reasons to read the blogs, eg:
// - Learn New Technologies, Boost Your Productivity, etc.
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
                    <button className="btn web-section-btn home-hero__btn">
                        Start Learning
                    </button>
                </div>
                <div className="web-section-grid__item">
                    <img className="web-section__item-img" src={EfficientDevLogo} />
                </div>
            </div>
            {/* <div className="web-section-cont-dark">
                <div className="web-section">
                    <div className="web-section__item">
                        <h2 className="web-section-header home-posts-header">
                            Blog Categories
                        </h2>
                    </div>
                    <div className="home-cat-container">
                        <CatCard card={{ title: "Front-End", icon: faWindowMaximize }} />
                        <CatCard card={{ title: "Back-End", icon: faDatabase }} />
                        <CatCard card={{ title: "Productivity", icon: faClock }} />
                        <CatCard card={{ title: "Other", icon: faGears }} />
                    </div>
                </div>
            </div> */}
            <div className="web-section-cont-dark">
                <div className="web-section">
                    <div className="web-section__item home-hero__item">
                        <h2 className="web-section-header home-posts-header">
                            Recent Posts
                        </h2>
                    </div>
                    <div className="home-posts-container">
                        {
                            posts.map((post, index) => {
                                return (
                                    <PostCard key={index} post={post} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;