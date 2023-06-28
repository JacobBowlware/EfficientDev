import { Post } from "."
import NodeJS from '../assets/blog-images/NodeJS.jpeg'

// Blog Bodys
import WhatIsNodeJS from "./blogBodys/WhatIsNodeJS";

const posts: Post[] = [
    {
        title: "What is NodeJS",
        body: WhatIsNodeJS,
        author: "Jacob Bowlware",
        date: "September 1, 2021",
        id: 1,
        subjectId: 2,
        image: NodeJS,
        description: "Learn what NodeJS is and how it works.",
    }
]

export default posts;