import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactJS from '../../assets/blog-images/ReactJS.png'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default (
    <div className="blog-body">
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <p className="blog-body__container-p">
                    ReactJS is a JavaScript library for building user interfaces. It is maintained by Facebook
                    and a community of individual developers and companies. React
                    can be used as a base in the development of web or mobile applications.
                </p>
                <p className="blog-body__container-p">
                    The main purpose of React is to be fast, scalable, and simple; In the modern world of web
                    development, these three things are essential for a successful product. Due to its simplicity,
                    React is easy to learn and use. React also allows for the creation of reusable UI components - which
                    can be a huge time saver when developing a large application.
                </p>
            </div>
        </div>
        <div className="blog-body__container">
            <img src={ReactJS} className="blog-body__container-img" />
        </div>
        <div className="blog-body__container mt-5">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    How does React work
                </h2>
                <p className="blog-body__container-p">
                    Instead of manipulating the browser's DOM (Document Object Model) directly, React creates
                    a virtual DOM in memory, where it does all the necessary manipulating
                    before making the changes in the browser - this allows React to be extremely fast. React will also help us create the
                    routing end-points for our application, which is a crucial part of any website.
                </p>
                <p className="blog-body__container-p">
                    React uses JSX, which is a syntax extension to JavaScript. JSX allows us to write HTML-like
                    code directly in our JavaScript files. This makes it easier to read and write code, and it also
                    helps us avoid the use of string concatenation when creating elements.
                </p>
            </div>
        </div>
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    What are the benefits of React
                </h2>
                <p className="blog-body__container-p">
                    React is a great tool for building modern web applications. It has many
                    benefits, including the following: React is fast, scalable, simple, easy to learn, and it has
                    a large community of developers who are constantly improving the library.
                </p>
                <p className="blog-body__container-p">
                    Another benefit of this large community is that there are many open source libraries
                    available for React. These libraries can be used to add functionality to your application
                    without having to write all the code yourself. This community also provides a lot of support
                    for new developers who are just getting started with React. If you are ever
                    stuck on a problem, there is a good chance that someone else has already solved it.
                </p>
            </div>
        </div>
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    The Key Takeaways
                </h2>
                <p className="blog-body__container-p">
                    React is a great tool for building modern web applications. It has many
                    benefits, including the following: React is fast, scalable, simple, easy to learn, and it has
                    a large community of developers who are constantly improving the library.
                </p>
                <p className="blog-body__container-p">
                    Due to this large community, there are many open source libraries that we can use
                    to add functionality to our application, without having to write all the code ourselves. This
                    community also provides a lot of support for new developers who are just getting
                    started with React - be it tutorials, documentation, or even a friendly chat.
                </p>
                <p className="blog-body__container-p">
                    If you are interested in learning more about React and how to use it, check out my
                    tutorial on <a href="/blogs/what-is-react-js">How to use ReactJS</a>. In this tutorial
                    I will show you how to create a simple application using ReactJS. We will learn how to define routes,
                    create components, and use state to manage our application's data.
                </p>
            </div>
        </div>
    </div>
)