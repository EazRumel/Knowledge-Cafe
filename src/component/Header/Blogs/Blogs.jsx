import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs,setBlogs] = useState ([]);
  useEffect (() => {
    fetch('blog.json')
    .then(response => response.json())
    .then(data => setBlogs(data))
  },[])
  return (
    <div>
      
    </div>
  );
};

export default Blogs;