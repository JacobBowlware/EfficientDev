import { Post } from "."
import NodeJS from '../assets/blog-images/NodeJS.jpeg'
import MongoDB from '../assets/blog-images/MongoDB.webp'

// Blog Bodys
import WhatIsNodeJS from "./blogBodys/WhatIsNodeJS";
import WhatIsMongoDB from "./blogBodys/WhatIsMongoDB";

const posts: Post[] = [
    {
        title: "What is NodeJS",
        body: WhatIsNodeJS,
        author: "Jacob Bowlware",
        date: "June 29, 2023",
        id: 1,
        subjectId: 2,
        image: NodeJS,
        description: "Learn what NodeJS is and how it works to build modern web applications.",
    },
    {
        title: "What is MongoDB",
        body: WhatIsMongoDB,
        author: "Jacob Bowlware",
        date: "July 2, 2023",
        id: 2,
        subjectId: 2,
        image: MongoDB,
        description: "Learn why so many developers prefer MongoDB over other databases - and how it works.",
    }
]

export default posts;