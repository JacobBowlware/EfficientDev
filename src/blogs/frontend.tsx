import { Post } from "."

// Blog Images
import ReactJS from '../assets/blog-images/ReactJS.png'
import HTML from '../assets/blog-images/HTML.png'
import TypeScript from '../assets/blog-images/TypeScript.png'

// Body HTML 
import WhatIsReactJS from './blogBodys/WhatIsReactJS';
import WhatIsHTML from "./blogBodys/WhatIsHTML";
import WhatIsTypeScript from "./blogBodys/WhatIsTypeScript";

const posts: Post[] = [
    {
        title: "What is ReactJS",
        body: WhatIsReactJS,
        author: "Jacob Bowlware",
        date: "June 26, 2023",
        id: 1,
        subjectId: 1,
        image: ReactJS,
        description: "Learn about ReactJS, a JavaScript library for building UIs.",
    },
    {
        title: "What is HTML & CSS",
        body: WhatIsHTML,
        author: "Jacob Bowlware",
        date: "July 1, 2023",
        id: 3,
        subjectId: 1,
        image: HTML,
        description: "Learn about HTML and CSS, the building blocks of the web.",
    },
    {
        title: "What is TypeScript",
        body: WhatIsTypeScript,
        author: "Jacob Bowlware",
        date: "July 2, 2023",
        id: 2,
        subjectId: 1,
        image: TypeScript,
        description: "Learn about TypeScript, the more secure version of JavaScript.",
    },
]

export default posts;