import { Link } from 'react-router-dom';

// Assets
import manSitting from '../assets/man-sitting.svg';
import EfficientDevLogo from '../assets/EfficientDevLogo.svg';
import CodeWithMoshSS from '../assets/CodeWIthMoshSS.png';

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
            <div className="web-section-cont">
                <div className="web-section">
                    <div className="web-section__item">
                        <h2 className="web-section-header home-posts-header">
                            Resource Recommendations
                        </h2>
                    </div>
                    <div className="home-resources-container">
                        <div className="home-resources-container__item">
                            <h3 className="home-resources__item-header">
                                Programming
                            </h3>
                            <p className="home-resources__item-body">
                                When it comes to programming, there are a lot of ways to learn new technologies. My
                                favorite way is through video tutorials.
                                I find that I learn best when I can see the code in action and follow along.
                            </p>
                            <p className="home-resources__item-body">
                                In my experience, the best place to find high quality, detailed, and easy to follow
                                tutorials is on <a href="https://codewithmosh.com//" target="_blank" rel="noreferrer">CodeWithMosh.com</a>.
                                Mosh Hamedani is a software engineer with over 20 years of experience and has taught over 3 million students.
                                He has a wide variety of courses on his website, ranging from beginner to advanced. I highly recommend
                                checking out his courses if you are looking to learn a new technology.
                            </p>
                        </div>
                        <div className="home-resources-container__item">
                            <h3 className="home-resources__item-header">
                                Productivity
                            </h3>
                            <p className="home-resources__item-body">
                                Productivity is a very important skill to have as a developer. It can be the difference
                                between finishing a project on time or missing a deadline. There are many ways to improve
                                your productivity, but one of the best ways is to optimize your life and work environment.
                            </p>
                            <p className="home-resources__item-body">
                                One of the best resources I have found for improving productivity
                                is the <a href="https://hubermanlab.com/" target="_blank" rel="noreferrer">HubermanLab.com</a>. Dr. Andrew
                                Huberman is a neuroscientist and tenured professor in the Department of Neurobiology at the Stanford University School of Medicine.
                                He has a YouTube channel where he shares his research on neuroscience and how it can be applied to improve
                                productivity, sleep, and overall health. I highly recommend checking out his channel if you are looking to
                                improve your productivity.
                            </p>
                        </div>
                        <div className="home-resources-container__item">
                            <h3 className="home-resources__item-header">
                                Overview
                            </h3>
                            <p className="home-resources__item-body">
                                These are just a few of the resources I have found to be helpful in my journey as a developer.
                                I encourage you to check them out and see if they can help you as well. I also encourage you to
                                do some research and find other resources that can help you become a better developer.
                            </p>
                            <p className="home-resources__item-body">
                                If you have any questions or comments, feel free to reach out to me on <a href="https://www.linkedin.com/in/jacob-bowlware-730824246/" target="_blank" rel="noreferrer">LinkedIn</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;