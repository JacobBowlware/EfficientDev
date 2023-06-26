import BackendPosts from './backend';
import FrontendPosts from './frontend';
import ProductivityPosts from './productivity';

export interface Post {
    title: string;
    body: React.ReactNode;
    author: string;
    date: string;
    id: number;
    subjectId: number;
};

const posts: Post[] = [
    ...BackendPosts,
    ...FrontendPosts,
    ...ProductivityPosts
];

export default posts;