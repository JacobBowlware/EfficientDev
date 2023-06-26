
interface BlogProps {
    title: string;
    author: string;
    body: React.ReactNode;
}

const Blog = ({ title, author, body }: BlogProps) => {
    return (
        <div className="web-section blog">
            <h1>{title}</h1>
            <h2>{author}</h2>
            {body}
        </div>
    );
}

export default Blog;