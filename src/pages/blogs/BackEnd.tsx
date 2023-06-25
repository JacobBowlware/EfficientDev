import BlogPage from '../../components/BlogPage';
import BackEndImg from '../../assets/BackEndImg.svg';

const posts = [
    {
        title: "How to Create a React App",
        description: "This tutorial will show you how to create a React app.",
        image: BackEndImg,
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