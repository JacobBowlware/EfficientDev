import { Post } from "."
import ReactJS from '../assets/blog-images/ReactJS.png'
import HTML from '../assets/blog-images/HTML.png'

// Body HTML 
import WhatIsReactJS from './blogBodys/WhatIsReactJS';
import WhatIsHTML from "./blogBodys/WhatIsHTML";

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
        title: "What is HTML and CSS",
        body: WhatIsHTML,
        author: "Jacob Bowlware",
        date: "July 1, 2023",
        id: 3,
        subjectId: 1,
        image: HTML,
        description: "Learn about HTML and CSS, the building blocks of the web.",
    },
    {
        title: "The Basics of ReactJS",
        body: WhatIsReactJS,
        author: "Jacob Bowlware",
        date: "June 28, 2023",
        id: 2,
        subjectId: 1,
        image: ReactJS,
        description: "Learn the basics of ReactJS, including JSX, components, and more.",
    },
]

export default posts;