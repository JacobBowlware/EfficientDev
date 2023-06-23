
import BackEndImg from '../assets/BackEndImg.svg';

const BackEnd = () => {
    return (
        <div className="blog-page">
            <div className="web-section-cont">
                <div className="web-section-grid home-hero">
                    <div className="web-section-grid__item">
                        <h1 className="web-section-header">
                            Back-End Development
                        </h1>
                        <p className="web-section__item-text home-hero-body">
                            Back-end development is the practice of creating the server-side of a website or web application.
                        </p>
                        <ul className="web-section__list">
                            <li className="web-section__list-item">
                                - NodeJS
                            </li>
                            <li className="web-section__list-item">
                                - Express
                            </li>
                            <li className="web-section__list-item">
                                - MongoDB
                            </li>
                            <li className="web-section__list-item">
                                - And much more...
                            </li>
                        </ul>
                        <a className="btn web-section-btn home-hero__btn" href="/blogs/backend/#blogs">
                            View Blogs
                        </a>
                    </div>
                    <div className="web-section-grid__item">
                        <img className="web-section__item-img" src={BackEndImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackEnd;