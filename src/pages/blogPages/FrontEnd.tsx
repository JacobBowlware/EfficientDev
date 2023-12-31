import BlogPage from "../../components/blogComponents/BlogPage";
import FrontEndImg from '../../assets/FrontEndImg.svg';

import posts from '../../blogs/frontend'

const FrontEnd = () => {
    return (
        <BlogPage image={FrontEndImg}
            title="Front-End"
            highlightTitle='Development'
            subTitle="Front end development is the practice of creating 
        the user interface of a website or web application."
            subList={[
                "HTML & CSS",
                "JavaScript",
                "ReactJS",
                "And much more..."
            ]}
            posts={posts}
            heroLink="/blogs/1/#blogs"
        />
    );
}

export default FrontEnd;