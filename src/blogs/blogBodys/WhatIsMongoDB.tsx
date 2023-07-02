import MongoDB from '../../assets/blog-images/MongoDB.webp'

export default (
    <div className="blog-body">
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <p className="blog-body__container-p">
                    MongoDB is a document-oriented database that stores data in JSON-like documents. It is
                    schema-less, which means that you don't have to define a schema before you can start using it. This
                    makes it very flexible and easy to use. MongoDB is also very fast and scalable, which makes it a
                    great choice for large-scale applications.
                </p>
            </div>
        </div>
        <div className="blog-body__container">
            <img src={MongoDB} className="blog-body__container-img" alt="ReactJS Logo" />
        </div>
        <div className="blog-body__container mt-5">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    How does MongoDB Work
                </h2>
                <p className="blog-body__container-p">
                    MongoDB is a NoSQL database, which means that it doesn't use SQL to query data. Instead, it uses
                    JavaScript to query data. This makes querying data very easy and intuitive. MongoDB also has a
                    built-in query language called MongoDB Query Language (MQL), which is very similar to SQL - just in
                    case you need to use it.
                </p>
                <p className="blog-body__container-p">
                    MongoDB stores data in collections, which are similar to tables in SQL databases. Each collection
                    has a unique name and contains documents. A document is a set of key-value pairs, similar to a JSON
                    object. Here is an example of a document in MongoDB:
                    <code>
                        `{
                            `{
                                name: 'John Doe',
                                age: 25,
                                email: 'johndoe@gmail.com'
                            }`
                        }`
                    </code>. As you can see, a document is just a set of key-value pairs. The keys are called fields
                    and the values are called values. Each field has a name and a value. The name of a field is always
                    a string, while the value can be any valid JSON value (string, number, boolean, null, array, or an object).
                </p>
            </div>
        </div>
        <div className="blog-body__container mt-5">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    MongoDB Syntax and Examples
                </h2>
                <p className="blog-body__container-p">
                    As stated earlier, MongoDB uses JavaScript to query data. This means that you can use all of the
                    JavaScript syntax and features that you are familiar with. Here is an example of how you would
                    query data from a MongoDB database:
                    <code>
                        `{
                            `const result = db.collection('users').find({ name: 'John Doe' })`
                        }`
                    </code>

                </p>
                <p className="blog-body__container-p">
                    This query will return all of the documents in the users collection where the name field is equal
                    to 'John Doe'. If we wanted to query for all user documents that have a name field that starts with
                    'John', we could do this:
                    <code>
                        `{
                            `const result = db.collection('users').find({ name: { $regex: '^John' } })`
                        }`
                    </code>
                    Often times we will use regular expressions to query data from a MongoDB database. Regular
                    expressions are very powerful and allow us to do things like search for documents that have a name
                    field that starts with 'John' or ends with 'Doe'. There are a lot of different ways to use regular expressions,
                    so I won't go into too much detail here. If you want to learn more about regular expressions, I recommend
                    checking out <a
                        rel="noreferrer"
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"
                        target="_blank">this article</a>.
                </p>
            </div>
        </div>
        <div className="blog-body__container">
            <div className="blog-body__container-item">
                <h2 className="blog-body__container-item-header">
                    The Key Takeaways
                </h2>
                <p className="blog-body__container-p">
                    MongoDB is a document-oriented database that stores data in JSON-like
                    documents. It is schema-less, which means that you don't have to define a schema before you can start using it.
                    This makes it very flexible and easy to use. MongoDB is also very fast and scalable, which makes it a great
                    choice for large-scale applications. Below are some other key takeaways from this article in bullet form.
                </p>
                <ul className="blog-body__list ">
                    <li className="blog-body__list-item">
                        MongoDB is a document-oriented database that stores data in JSON-like documents.
                    </li>
                    <li className="blog-body__list-item">
                        MongoDB is schema-less, which means that you don't have to define a schema before you can start using it.
                    </li>
                    <li className="blog-body__list-item">
                        MongoDB is very fast and scalable, which makes it a great choice for large-scale applications.
                    </li>
                    <li className="blog-body__list-item">
                        MongoDB uses JavaScript to query data.
                    </li>
                    <li className="blog-body__list-item">
                        MongoDB has a built-in query language called MongoDB Query Language (MQL).
                    </li>
                    <li className="blog-body__list-item">
                        MongoDB uses regular expressions to query data.
                    </li>
                </ul>
            </div>
        </div>
    </div >
)