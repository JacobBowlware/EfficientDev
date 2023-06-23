
import FrontEndImg from "../assets/FrontEndImg.svg";

const FrontEnd = () => {
    return (
        <div className="blog-page">
            <div className="web-section-cont">
                <div className="web-section-grid home-hero">
                    <div className="web-section-grid__item">
                        <h1 className="web-section-header">
                            Front-End Development
                        </h1>
                        <p className="web-section__item-text home-hero-body">
                            Front end development is the practice of creating the user interface of a website or web application.
                        </p>
                        <ul className="web-section__list">
                            <li className="web-section__list-item">
                                - HTML & CSS
                            </li>
                            <li className="web-section__list-item">
                                - JavaScript
                            </li>
                            <li className="web-section__list-item">
                                - ReactJS
                            </li>
                            <li className="web-section__list-item">
                                - And much more...
                            </li>
                        </ul>
                        <a className="btn web-section-btn home-hero__btn" href="/blogs/frontend/#blogs">
                            View Blogs
                        </a>
                    </div>
                    <div className="web-section-grid__item">
                        <img className="web-section__item-img" src={FrontEndImg} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrontEnd;