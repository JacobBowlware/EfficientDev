import BlogPage from "../../components/BlogPage";
import FrontEndImg from '../../assets/FrontEndImg.svg';

const posts = [
    {
        title: "How to Create a React App",
        description: "This tutorial will show you how to create a React app.",
        image: FrontEndImg
    },
]

const FrontEnd = () => {
    return (
        <BlogPage image={FrontEndImg}
            title="Front-End Development"
            subTitle="Front end development is the practice of creating 
        the user interface of a website or web application."
            subList={[
                "HTML & CSS",
                "JavaScript",
                "ReactJS",
                "And much more..."
            ]}
            posts={posts}
            heroLink="/blogs/frontend/#blogs"
        />
    );
}

export default FrontEnd;