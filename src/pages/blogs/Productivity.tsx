import BlogPage from '../../components/BlogPage';
import ProductivityImg from '../../assets/ProductivityImg.svg';

const posts = [
    {
        title: "How to Create a React App",
        description: "This tutorial will show you how to create a React app.",
        image: ProductivityImg
    },
]

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