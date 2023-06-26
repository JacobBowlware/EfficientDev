import BlogPage from '../../components/Blogs/BlogPage';
import BackEndImg from '../../assets/BackEndImg.svg';
import NodeJS from '../../assets/blog-images/NodeJS.jpeg';

// NOTE: Back-end posts will have subjectId: 2
const posts = [
    {
        title: "What is NodeJS",
        description: "Learn about NodeJS and why it is so popular among back-end developers.",
        image: NodeJS,
        link: "/blogs/backend/how-to-create-a-react-app",
        id: 1,
        subjectId: 2
    },
]

const BackEnd = () => {
    return (
        <BlogPage image={BackEndImg}
            title="Back-End Development"
            subTitle="Back-end development is the practice 
            of creating the server-side of a website or web application."
            subList={[
                "NodeJS",
                "Express",
                "MongoDB",
                "And much more..."
            ]}
            posts={posts}
            heroLink="/blogs/backend/#blogs"
        />
    );
}

export default BackEnd;