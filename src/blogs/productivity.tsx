import { Post } from "."
import Productivity3 from '../assets/blog-images/Productivity3.jpeg';
import ProductivityTips5 from "./blogBodys/ProductivityTips5";

const posts: Post[] = [
    {
        title: "5 Productivity Tips",
        body: ProductivityTips5,
        author: "Jacob Bowlware",
        date: "September 1, 2021",
        id: 1,
        subjectId: 3,
        image: Productivity3,
        description: "Learn how to be more productive with 5 simple tips.",
    }
]

export default posts;