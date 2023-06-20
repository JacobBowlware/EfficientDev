import manSitting from '../assets/man-sitting.svg';

const Home = () => {
    return (
        <>
            <div className="web-section-grid web-section-dark home-hero">
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
                    <img className="web-section__item-img" src={manSitting} alt="" />
                </div>
            </div>
            <div className="web-section-cont-dark">
                <div className="web-section">
                    <div className="web-section__item home-hero__item">
                        <h2 className="web-section-header home-posts-header">
                            Latest Posts
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;