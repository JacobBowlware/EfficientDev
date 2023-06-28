
interface BlogProps {
    title: string;
    author: string;
    body: React.ReactNode;
    date: string;
}

const Blog = ({ title, author, body, date }: BlogProps) => {
    return (
        <div className="web-section blog-page blog">
            <h1 className="web-section-header blog-page-header">{title}</h1>
            {body}
            <div className="blog-page-footer">
                <p className="blog-page-author">Written by {author}.</p>
                <p className="blog-page-date">{date}</p>
            </div>
        </div>
    );
}

export default Blog;