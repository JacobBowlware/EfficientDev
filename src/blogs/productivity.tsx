import { Post } from "."
import Productivity3 from '../assets/blog-images/Productivity3.jpeg';
import Sleep from '../assets/blog-images/Sleep.jpeg';

// Blog Bodys
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
        title: "Why Sleep is Important for Developers",
        body: ProductivityTips5,
        author: "Jacob Bowlware",
        date: "June 18, 2023",
        id: 1,
        subjectId: 3,
        image: Sleep,
        description: "Learn why sleep is important and how you should be getting more of it.",
    }
]

export default posts;