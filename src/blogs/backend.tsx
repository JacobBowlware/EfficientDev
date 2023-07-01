import { Post } from "."
import NodeJS from '../assets/blog-images/NodeJS.jpeg'

// Blog Bodys
import WhatIsNodeJS from "./blogBodys/WhatIsNodeJS";

const posts: Post[] = [
    {
        title: "What is NodeJS",
        body: WhatIsNodeJS,
        author: "Jacob Bowlware",
        date: "June 29, 2023",
        id: 1,
        subjectId: 2,
        image: NodeJS,
        description: "Learn what NodeJS is and how it works.",
    },
    {
        title: "How to use NodeJS with Express",
        body: WhatIsNodeJS,
        author: "Jacob Bowlware",
        date: "June 29, 2023",
        id: 2,
        subjectId: 2,
        image: NodeJS,
        description: "Learn how to use NodeJS with Express and create a simple API.",
    }
]

export default posts;