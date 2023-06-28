import BlogPage from '../../components/blogComponents/BlogPage';
import ProductivityImg from '../../assets/ProductivityImg.svg';
import posts from '../../blogs/productivity';

const Productivity = () => {
    return (
        <BlogPage image={ProductivityImg}
            title="Productivity"
            subTitle="Productivity is the practice of getting more done in less time."
            subList={[
                "Time Management",
                "Goal Setting",
                "Motivation",
                "And much more..."
            ]}
            posts={posts}
            heroLink='/blogs/productivity/#blogs'
        />
    );
}

export default Productivity;