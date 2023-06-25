import BlogPage from '../../components/BlogPage';
import BackEndImg from '../../assets/BackEndImg.svg';

// TODO: Add post snippets here upon completion of blog post
const posts = [
    {
        title: "How to Create a React App",
        description: "This tutorial will show you how to create a React app.",
        image: BackEndImg,
        link: "/blogs/backend/how-to-create-a-react-app"
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