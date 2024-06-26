const BlogList = ({blogs, title, handleDelete}) => {
    //const blogs = props.blogs;
    //const title = props.title;
    //console.log(props,blogs);
    //console.log(props,title);
    //console.log(blogs);
    //console.log(title);

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p> Written by ...  {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;