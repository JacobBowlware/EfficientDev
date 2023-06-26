import BlogPage from '../../components/BlogPage';
import ProductivityImg from '../../assets/ProductivityImg.svg';
import Productivity3 from '../../assets/blog-images/Productivity3.jpeg';

// TODO: Add post snippets here upon completion of blog post
const posts = [
    {
        title: "5 Tips to Increase Productivity",
        description: "Learn some small, yet effective tips to increase your productivity today.",
        image: Productivity3,
        link: "/blogs/productivity/how-to-create-a-react-app",
        id: 1
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