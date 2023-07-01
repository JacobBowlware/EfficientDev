import { Post } from "."
import Productivity3 from '../assets/blog-images/Productivity3.jpeg';
import ProductivityTips5 from "./blogBodys/ProductivityTips5";

const posts: Post[] = [
    {
        title: "3 Productivity Tips for Developers",
        body: ProductivityTips5,
        author: "Jacob Bowlware",
        date: "June 18, 2023",
        id: 1,
        subjectId: 3,
        image: Productivity3,
        description: "Learn how to be more productive with 3 simple tips.",
    },
    {
        title: "Why Productivity is Important for Developers",
        body: ProductivityTips5,
        author: "Jacob Bowlware",
        date: "June 18, 2023",
        id: 1,
        subjectId: 3,
        image: Productivity3,
        description: "Learn why productivity is important for developers, and how to be more productive.",
    }
]

export default posts;