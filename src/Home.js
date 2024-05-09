import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum 1...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum 2...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum 3...', author: 'mario', id: 3 },
        { title: 'My old website', body: 'lorem ipsum 4...', author: 'mario', id: 4 },
        { title: 'Welcome to afterparty!', body: 'lorem ipsum 5...', author: 'yoshi', id: 5 },
        { title: 'Web dev top 10 tips', body: 'lorem ipsum 6...', author: 'mario', id: 6 }
    ]);
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    
    useEffect(() => {
        console.log('useEffect :: launched');
        console.log(blogs);
    });
    
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs !!!" handleDelete={handleDelete}/>
                                              
        </div>
    );
}
 
export default Home;