import BlogPage from '../../components/blogComponents/BlogPage';
import BackEndImg from '../../assets/BackEndImg.svg';
import posts from '../../blogs/backend';

const BackEnd = () => {
    return (
        <BlogPage image={BackEndImg}
            title="Back-End"
            highlightTitle='Development'
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