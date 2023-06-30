import { Post } from "."
import NodeJS from '../assets/blog-images/NodeJS.jpeg'
import ExpressLogo from '../assets/blog-images/ExpressLogo.png'

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
        id: 1,
        subjectId: 2,
        image: ExpressLogo,
        description: "Learn how to create a NodeJS project and use Express to create a server.",
    }
]

export default posts;