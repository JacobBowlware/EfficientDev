import NodeJS from '../../assets/blog-images/NodeJS.jpeg';
import NodeProjectSS1 from '../../assets/blog-images/NodeProjectSS1.png';

export default (
    <div className="blog-body">
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <p className="blog-body__container-p">
                    NodeJS and Express are two of the most popular tools for building web applications. NodeJS is a
                    JavaScript runtime environment that allows developers to write server-side code in JavaScript.
                    Express is a web framework that makes it easy to build web applications with NodeJS. When we pair the two
                    together, we can build powerful web applications that are fast, scalable, and easy to maintain.
                </p>
                <p className="blog-body__container-p">
                    In this blog post, we will learn how to use NodeJS with Express to build simple API endpoints. These endpoints will
                    allow us to create, read, update, and delete data from a MongoDB database. We will also learn how to
                    use <a href="https://www.postman.com/" rel="noreferrer" target="_blank">Postman</a> to test our API endpoints.
                </p>
            </div>
        </div>
        <div className="blog-body__container">
            <img src={NodeJS} className="blog-body__container-img" alt="ReactJS Logo" />
        </div>
        <div className="blog-body__container mt-5">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    Installing NodeJS
                </h2>
                <p className="blog-body__container-p">
                    To get started, we need to make sure that we have NodeJS installed on our computer. If you don't have it installed already,
                    you can download it from <a href="https://nodejs.org/en/download" rel="noreferrer" target="_blank">here</a>. Once you have NodeJS installed,
                    run the following command in your terminal to make sure that it is installed correctly: <code>node -v</code> - this should print out
                    the version number of NodeJS that you have installed on your computer.
                </p>
            </div>
        </div>
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    Creating a New NodeJS Project
                </h2>
                <p className="blog-body__container-p">
                    Now that we have NodeJS installed, let's create a new project. Open up your terminal and run the following command in the directory
                    where you want to create your project: <code>mkdir nodejs-project</code>.
                </p>
                <p className="blog-body__container-p">
                    Next, we need to initialize our project with npm. Run the following command in your terminal: <code>npm init --y</code> - the --y flag
                    tells npm to use the default settings for our project. This will create
                    a package.json file in the root directory of your project. The package.json file contains
                    information about your project, such as its name, version number, and dependencies.
                </p>
                <p className="blog-body__container-p">
                    Lastly, we need to create a file called index.js in the root directory of our project. This file will contain the code for our server.
                    Open up your code editor and create a new file called index.js. Add the following code to your index.js file:
                    <code> console.log("My First Node Project.");</code>. We can now 'run our server' by running the following command in our terminal:
                    <code> node index.js</code>. This will execute the code in our index.js file and print out "My First Node Project." to the console.
                </p>
            </div>
            <img src={NodeProjectSS1} className="blog-body__container-img" alt="Node Project Screenshot 1" />
        </div>
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    Quick Steps to Create a NodeJS Project
                </h2>
                <ul className="blog-body__list ">
                    <li className="blog-body__list-item">
                        Create a new directory for your project - <code>mkdir nodejs-project</code>
                    </li>
                    <li className="blog-body__list-item">
                        Initialize your project with npm - <code>npm init --y</code>
                    </li>
                    <li className="blog-body__list-item">
                        Create a file called index.js in the root directory of your project
                    </li>
                    <li className="blog-body__list-item">
                        Add the following code to your index.js file: <code>console.log("My First Node Project.");</code>
                    </li>
                    <li className="blog-body__list-item">
                        Run the code - <code>node index.js</code>
                    </li>
                </ul>
                <p className="blog-body__container-p">
                    Keep in mind, this is a very basic example of how to create a NodeJS project. In the real world we would use a framework like Express
                    to build our server. We would also use a database like MongoDB to store our data. Express, MongoDB, and NodeJS would all work
                    together to create the backend of our application.
                </p>
            </div>
        </div >
    </div >
)