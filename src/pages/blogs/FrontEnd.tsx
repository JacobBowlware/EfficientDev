import BlogPage from "../../components/Blogs/BlogPage";
import FrontEndImg from '../../assets/FrontEndImg.svg';
import ReactJS from '../../assets/blog-images/ReactJS.png';

// NOTE: Front-end posts will have subjectId: 1
const posts = [
    {
        title: "What is React JS",
        description: "Dive into the world of React JS and learn why so many developers use it.",
        image: ReactJS,
        link: "/blogs/frontend/what-is-react-js",
        id: 1,
        subjectId: 1
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