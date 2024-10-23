import { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleAddToBookmarks}) => {
  const [blogs,setBlogs] = useState ([]);
  useEffect (() => {
    fetch('blog.json')
    .then(response => response.json())
    .then(data => setBlogs(data))
  },[])
  return (
    <div className="md:w-2/3">
       <h1 className="text-4xl">Blogs:{blogs.length}</h1>
       {
        blogs.map(blog => <Blog handleAddToBookmarks={handleAddToBookmarks} key={CSSLayerBlockRule.id}
        blog={blog} ></Blog>)
       }
    </div>
  );
};
Blogs.propTypes = {
  handleAddToBookmarks:PropTypes.func
}

export default Blogs;