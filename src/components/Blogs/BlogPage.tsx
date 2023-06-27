import PostCard from "../PostCard";
interface Post {
    title: string;
    description: string;
    image: string;
    link: string;
    id: number;
}

interface BlogProps {
    posts: Post[];
    title: string;
    highlightTitle?: string;
    subTitle: string;
    subList: string[];
    image: string;
    heroLink: string;
}

const BlogPage = ({ posts, title, highlightTitle, subTitle, subList, image, heroLink }: BlogProps) => {
    return (
        <div className="blog-page">
            <div className="web-section-cont">
                <div className="web-section-grid home-hero">
                    <div className="web-section-grid__item">
                        <h1 className="web-section-header">
                            {title} <span className="text-highlight">{highlightTitle}</span>
                        </h1>
                        <p className="web-section__item-text home-hero-body">
                            {subTitle}
                        </p>
                        <ul className="web-section__list">
                            {subList.map((item, index) => (
                                <li className="web-section__list-item" key={index}>
                                    - {item}
                                </li>
                            ))}
                        </ul>
                        <a className="btn web-section-btn home-hero__btn" href={heroLink}>
                            View Blogs
                        </a>
                    </div>
                    <div className="web-section-grid__item">
                        <img className="web-section__item-img" src={image} alt="" />
                    </div>
                </div>
            </div>
            <div className="web-section-cont-dark" id="blogs">
                <div className="web-section">
                    <div className="web-section__item">
                        <h2 className="web-section-header blog-page__subheading">
                            Explore Blogs
                        </h2>
                    </div>
                    <div className="home-posts-container">
                        {posts.map((post, index) => (
                            <PostCard post={post} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPage;