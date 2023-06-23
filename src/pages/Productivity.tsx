import ProductivityImg from '../assets/ProductivityImg.svg';

const Productivity = () => {
    return (
        <div className="blog-page">
            <div className="web-section-cont">
                <div className="web-section-grid home-hero">
                    <div className="web-section-grid__item">
                        <h1 className="web-section-header">
                            Productivity
                        </h1>
                        <p className="web-section__item-text home-hero-body">
                            Productivity is the practice of getting more done in less time.
                        </p>
                        <ul className="web-section__list">
                            <li className="web-section__list-item">
                                - Time Management
                            </li>
                            <li className="web-section__list-item">
                                - Goal Setting
                            </li>
                            <li className="web-section__list-item">
                                - Motivation
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
                        <img className="web-section__item-img" src={ProductivityImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productivity;