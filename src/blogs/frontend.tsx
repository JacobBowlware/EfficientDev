import { Post } from "."
import ReactJS from '../assets/blog-images/ReactJS.png'

// Body HTML 
import WhatIsReactJS from './blogBodys/WhatIsReactJS';

const posts: Post[] = [
    {
        title: "What is ReactJS",
        body: WhatIsReactJS,
        author: "Jacob Bowlware",
        date: "June 26, 2023",
        id: 1,
        subjectId: 1,
        image: ReactJS,
        description: "Learn about ReactJS, a JavaScript library for building UIs",
    },
    {
        title: "How to use ReactJS",
        body: WhatIsReactJS,
        author: "Jacob Bowlware",
        date: "June 26, 2023",
        id: 2,
        subjectId: 1,
        image: ReactJS,
        description: "Learn how to create custom components, use hooks, and more.",
    }
]

export default posts;