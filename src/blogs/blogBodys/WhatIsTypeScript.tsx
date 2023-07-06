import TypeScript from '../../assets/blog-images/TypeScript.png'
import TSPostCode1 from '../../assets/blog-images/TSPostCode1.png'

export default (
    <div className="blog-body">
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <p className="blog-body__container-p">
                    TypeScript, created by Microsoft, has become one of the most popular programming languages in recent years. Many
                    developers are switching from JavaScript to TypeScript because of its many benefits. In this blog post, we will discuss
                    what TypeScript is and why you should use it.
                </p>
                <p className="blog-body__container-p">
                    TypeScript is a superset of JavaScript that adds static typing to the language. This means that TypeScript will check
                    your code for errors at compile time instead of at runtime. This makes it easier to write code that is less likely to have
                    bugs in it - which means less time spent debugging and more time spent building new features. TypeScript also has many other
                    features that make it easier to write code, such as type inference and generics. In this blog post we will focus on the
                    type system and how it can help you write better code.
                </p>
            </div>
        </div>
        <div className="blog-body__container">
            <img src={TypeScript} className="blog-body__container-img" alt="ReactJS Logo" />
        </div>
        <div className="blog-body__container mt-5">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    Why should we use TypeScript
                </h2>
                <p className="blog-body__container-p">
                    TypeScript is a great tool for building large applications. It has many benefits, including the following:
                    TypeScript is fast, scalable, simple, easy to learn, and it has a large community of developers who are constantly
                    improving the language. If you are already familiar with JavaScript, then learning TypeScript will be easy for you.
                </p>
                <p className="blog-body__container-p">
                    My favorite feature of TypeScript is the type system. It allows us to catch errors at compile time instead of at
                    runtime, as stated earlier. This makes it easier to write code that is less likely to have bugs in it. An example of this would
                    be if we declared a variable named "name" and assigned it a value of "Jacob", then tried to assign a number to it later on in our code.
                    <code >
                        <br />
                        let name: string = "Jacob"; <br />
                        name = 4; // error <br />
                        name = "John" // no error
                    </code>
                </p>
            </div>
        </div>
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    Syntax and Features
                </h2>
                <p className="blog-body__container-p">
                    The syntax of TypeScript is very similar to JavaScript. The main difference is the type system. From the example above, we can see that
                    we declare a variable with a type annotation after it. This tells TypeScript what type the variable should be. In
                    this case, we are declaring a variable named "name" and assigning it a value of type string.
                </p>
                <p className="blog-body__container-p">
                    Now that we have our variable declared, we can use it in our code. For example, if we wanted to print
                    out the value of the variable with a function called "printName", we would write something like
                    this: <code>function printName(name: string): void &#123; console.log(name) &#125;</code>. Now when we call this function, TypeScript will
                    check to make sure that the argument we pass in is of type string - if it isn't, then TypeScript will throw an error. We also have
                    specified the return type of the function as void, which means that it doesn't return anything.
                </p>
            </div>
        </div>
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    The Key Takeaways
                </h2>
                <p className="blog-body__container-p">
                    TypeScript is a superset of JavaScript that compiles to plain JavaScript. It has a type system that allows us to specify
                    the type of variables, function parameters, and function return values. This helps us catch errors at compile time instead of at runtime.
                    TypeScript has a module system that allows us to organize our code into reusable modules. TypeScript also has a class-based object-oriented
                    programming model, which is similar to Java or C# - this makes it easier to write object-oriented code.
                </p>
                <p className="blog-body__container-p">
                    TypeScript is fast, scalable, simple, easy to learn, and it has a large community of developers who are constantly improving the language.
                    If you are already familiar with JavaScript, then learning TypeScript will be easy for you.
                </p>
                <p className="blog-body__container-p">
                    To declare a variable in TypeScript, we have to specify the type of the variable. For example, if we wanted to declare a variable named "name"
                    and assign it a value of "Jacob", we would write something like this: <code>let name: string = "Jacob"</code>. This tells TypeScript that the variable
                    "name" is of type string and can only hold string values. There are many types in TypeScript, including number, boolean, string, array, tuple, enum - each
                    serving its own purpose.
                </p>
                <p className="blog-body__container-p">
                    There is a lot more to TypeScript than what I have covered in this blog post. If you are interested in learning more about TypeScript, I recommend
                    checking out the official documentation at <a href="https://www.typescriptlang.org/docs/" rel='noreferrer' target='_blank'>https://www.typescriptlang.org/docs/</a>.
                </p>
            </div>
        </div>
    </div>
)