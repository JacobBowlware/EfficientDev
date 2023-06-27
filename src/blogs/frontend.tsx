import { Post } from "."

// Body HTML 
import WhatIsReactJS from './blogBodys/WhatIsReactJS';

const posts: Post[] = [
    {
        title: "What is ReactJS",
        body: WhatIsReactJS,
        author: "Jacob Bowlware",
        date: "June 26, 2023",
        id: 1,
        subjectId: 1
    }
]

export default posts;