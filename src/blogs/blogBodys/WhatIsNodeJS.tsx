import NodeJS from '../../assets/blog-images/NodeJS.jpeg';

export default (
    <div className="blog-body">
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <p className="blog-body__container-p">
                    NodeJS is a JavaScript runtime environment that allows us to run JavaScript code outside of the
                    browser. NodeJS is built on top of the V8 JavaScript engine, which is the same engine that Google
                    Chrome uses to run JavaScript code in the browser. NodeJS is a great tool for building fast and
                    scalable network applications.
                </p>
                <p className="blog-body__container-p">
                    NodeJS is event-driven, which means that everything that happens in NodeJS is in reaction to an
                    event. This allows NodeJS to be very fast and efficient. NodeJS is also single-threaded, which means
                    that it uses a single thread to execute JavaScript code -  which results in better performance. This is different from other languages like
                    Python and Java, which use multiple threads to handle multiple requests.
                </p>
            </div>
        </div>
        <div className="blog-body__container">
            <img src={NodeJS} className="blog-body__container-img" alt="ReactJS Logo" />
        </div>
        <div className="blog-body__container mt-5">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    How does NodeJS work
                </h2>
                <p className="blog-body__container-p">
                    As stated earlier, NodeJS is event-driven and single-threaded. NodeJS uses an event loop to handle
                    events. The event loop is a loop that runs continuously and waits for events to occur. An example of
                    an event is a request from a client - like the fetching of a users data upon login.
                </p>
                <p className="blog-body__container-p">
                    When a request comes in, the event loop
                    will handle it by executing the appropriate callback function. This callback function will then be added to the call stack, which is a data structure
                    that stores functions that are waiting to be executed. When the callback
                    function is finished executing, it will be removed from the call stack.
                </p>
            </div>
        </div>
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    What are the benefits of NodeJS
                </h2>
                <p className="blog-body__container-p">
                    NodeJS is very popular, and there are many reasons why. One of the main reasons is that it is
                    fast and scalable - NodeJS is fast because of the event-driven nature we mentioned earlier. NodeJS also has many more
                    benefits, here are a few:
                </p>
                <ul className="blog-body__list">
                    <li className="blog-body__list-item">
                        <strong>NodeJS is easy to learn</strong> -
                        NodeJS is built on top of JavaScript, which is one
                        of the most popular programming languages in the world.
                        This means that if you already know JavaScript, then
                        learning NodeJS will be very easy for you.
                    </li>
                    <li className="blog-body__list-item">
                        <strong>NodeJS has a large community</strong> -
                        NodeJS has a large community of developers who are constantly
                        improving the library. This means that if you ever get stuck on a problem,
                        there is a good chance that someone else has already solved it.
                    </li>
                    <li className="blog-body__list-item">
                        <strong>NodeJS is open source</strong> -
                        NodeJS is open source, which means that anyone can contribute to the project.
                        This means that if you want to add a feature or fix a bug, you can do so by submitting a pull request.
                    </li>
                </ul>
            </div>
        </div>
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    The Key Takeaways
                </h2>
                <p className="blog-body__container-p">
                    NodeJS is a JavaScript runtime environment that allows us to run JavaScript code outside of the
                    browser - it is often paired with MongoDB and Express to create the back-end of an application. NodeJS is event-driven and single-threaded, which means that it uses a single thread to
                    execute JavaScript code. NodeJS is fast and scalable, and has a large community of developers who
                    are constantly improving the library.
                </p>
                <p className="blog-body__container-p">
                    Another great thing about NodeJS is that it is easy to learn. If you already know JavaScript, then
                    learning NodeJS will be very easy for you. NodeJS is also open source, which means that anyone can
                    contribute to the project. This means that if you want to add a feature or fix a bug, you can do so.
                </p>
                <p className="blog-body__container-p">
                    If you are interested in learning more about NodeJS and how to use it, check out my
                    tutorial on <a href="/blogs/what-is-react-js">How to use NodeJS</a>. In this tutorial
                    I will show you how to create a simple NodeJS application. We will pair NodeJS with ExpressJS to
                    create a simple web server that will serve static files.
                </p>
            </div>
        </div>
    </div>
)