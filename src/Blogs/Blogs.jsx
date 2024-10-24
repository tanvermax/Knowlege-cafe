import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddBookmaed, habdleMarkasread,color }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl">Blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          handleAddBookmaed={handleAddBookmaed}
          habdleMarkasread={habdleMarkasread}
          color={color}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.proptypes = {
  handleAddBookmaed: PropTypes.func,
  habdleMarkasread: PropTypes.func,
};

export default Blogs;
