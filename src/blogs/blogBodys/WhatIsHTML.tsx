import HTML from '../../assets/blog-images/HTML.png'

export default (
    <div className="blog-body">
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <p className="blog-body__container-p">
                    HTML is a markup language used to create web pages and web applications. HTML itself stands for HyperText
                    Markup Language. This is the standard markup language for creating web pages and web applications. HTML
                    is used to describe the structure of a web page, while CSS is used to describe the style of a web page. Without
                    pairing both HTML and CSS, the web would not be what it is today.
                </p>
                <p className="blog-body__container-p">
                    Every web page is made up of HTML elements. These elements are the building
                    blocks of a web page. HTML elements are represented by tags, which are enclosed in angle brackets -
                    like this: <code>{`<p> Hello World! </p>`}</code>. The opening tag can also contain attributes,
                    which are used to provide additional information about the element. For example,
                    the <code>{`<a>`}</code> tag is used to create a link, and it has an attribute called <code>href</code> that specifies
                    the link's destination - like this: <code>{`<a href="https://www.google.com">Google</a>`}</code>.


                </p>
            </div>
        </div>
        <div className="blog-body__container">
            <img src={HTML} className="blog-body__container-img" alt="ReactJS Logo" />
        </div>
        <div className="blog-body__container mt-5">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    Complex HTML Elements
                </h2>
                <p className="blog-body__container-p">
                    HTML elements can be nested inside of each other. For example, the <code>{`<ul>`}</code> tag is
                    used to create an "unordered list", and the <code>{`<li>`}</code> tag is used to create
                    a "list item". The <code>{`<li>`}</code> tag is nested inside of the <code>{`<ul> `}</code>
                    tag to create a list. Here is an example of what that looks like: <br></br>
                    <code>
                        &lt;ul&gt; <br />
                        &nbsp;&nbsp;&lt;li&gt;Item 1&lt;/li&gt; <br />
                        &nbsp;&nbsp;&lt;li&gt;Item 2&lt;/li&gt; <br />
                        &lt;/ul&gt;
                    </code>
                </p>
                <p className="blog-body__container-p">
                    This is just one example of how HTML elements can be nested inside of
                    each other. There are many other examples, and perhaps the most common one
                    is the <code>{`<div>`}</code> tag. This tag is used to create a "division" or
                    "section" of a web page - think of it as a container for other HTML elements. For example,
                    if you wanted to create a header for your web page, you could use the <code>{`<div>`}</code> tag
                    to create a container for the header, and then you could use the <code>{`<h1>`}</code> tag to create
                    the actual header. Here is an example of what that looks like: <br></br>
                    <code>
                        &lt;div&gt; <br />
                        &nbsp;&nbsp;&lt;h1&gt;My Header&lt;/h1&gt; <br />
                        &lt;/div&gt;
                    </code>
                </p>
            </div>
        </div>
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    How to Apply Styles to HTML Elements
                </h2>
                <p className="blog-body__container-p">
                    Styling HTML elements is most commonly done with CSS (Cascading Style
                    Sheets). CSS is a language that is used to describe the style of a web page. We
                    can use CSS to change the color, size, font, and many other properties of an HTML element.
                    For example, if we wanted to change the color of the text in a paragraph, we could use the
                    <code> color</code> property in CSS. Here is an example of what that looks like: <br></br>
                    <code>
                        {`
                            <p style={{"color": "red"}}>Hello World!</p>
                        `}
                    </code>
                </p>
                <p className="blog-body__container-p">
                    There is another, more modern way to style HTML elements called class names. Class names are
                    used to group HTML elements together so that they can be styled as a group. For example, if we
                    wanted to change the color of all the paragraphs on our web page, we could use a class name to
                    group them together. Here is an example of what that looks like: <br></br>
                    <code>
                        &lt;p class="paragraph"&gt;Hello World!&lt;/p&gt; <br></br>
                        &lt;p class="paragraph"&gt; <br /> &nbsp;&nbsp; This is a different paragraph - but has the same class <br />&lt;/p&gt;
                    </code>
                </p>
                <p className="blog-body__container-p">
                    Now that we have grouped our paragraphs together, we can use CSS to style them as a group. Here
                    is an example of what that looks like inside our projects css file: <br></br>
                    <code>
                        {`
                            .paragraph {
                                color: red;
                            }
                        `}
                    </code>
                </p>
            </div>
        </div>
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    The Key Takeaways
                </h2>
                <p className="blog-body__container-p">
                    HTML is the foundation of the web. It is used to describe the structure of a web page, while CSS is
                    used to describe the style of a web page. Together, they make up the building blocks of the web.
                </p>
                <p className="blog-body__container-p">
                    HTML elements are represented by tags, which are enclosed in angle brackets. The opening tag can also
                    contain attributes, which are used to provide additional information about the element. For example,
                    the <code>{`<a>`}</code> tag is used to create a link, and it has an attribute called <code>href</code> that specifies
                    the link's destination - like this: <code>{`<a href="https://www.google.com">Google</a>`}</code>.
                </p>
                <p className="blog-body__container-p">
                    Tags can be nested inside of each other. For example, the <code>{`<ul>`}</code> tag is used to create an
                    "unordered list", and the <code>{`<li>`}</code> tag is used to create a "list item". The <code>{`<li>`}</code> tag
                    is nested inside of the <code>{`<ul>`}</code> tag to create a list. Here is an example of what that looks like: <br></br>
                    <code>
                        &lt;ul&gt; <br />
                        &nbsp;&nbsp;&lt;li&gt;Item 1&lt;/li&gt; <br />
                        &nbsp;&nbsp;&lt;li&gt;Item 2&lt;/li&gt; <br />
                        &lt;/ul&gt;
                    </code>
                </p>
                <p className="blog-body__container-p">
                    Lastly, HTML elements can be styled with CSS. CSS is a language that is used to describe the style of a web page.
                    We can use CSS to change the color, size, font, and many other properties of an HTML element. For example, if we
                    wanted to change the color of the text in a paragraph, we could use the <code>color</code> property in CSS. Here is
                    an example of what that looks like: <br></br>
                    <code>
                        {`
                            <p style={{"color": "red"}}>Hello World!</p>
                        `}
                    </code>
                </p>
            </div>
        </div>
    </div >
)