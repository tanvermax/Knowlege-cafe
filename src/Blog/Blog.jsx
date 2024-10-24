import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Blog = ({ blog,handleAddBookmaed ,habdleMarkasread }) => {
  const {
    id,
    title,
    cover_image,
    author_image,
    author_name,
    post_date,
    reading_time,
    hashtag,
  } = blog;

  const [isRead, setIsRead] = useState(false);


  const handleMarkAsReadClick = () => {
    if (isRead) {
      // CHANGED: Show alert if already marked as read
      alert("This blog has already been marked as read.");
    } else {
      habdleMarkasread(id, reading_time); // Call the original function
      setIsRead(true); // Mark blog as read
    } // Update state to mark blog as read
  };

  const [ isregular, setMArked] =useState(false);

  const handleIconMarked = ()=>{
   if (isregular) {
    alert("this artical already being Bookmarked")
   }
   else{
    handleAddBookmaed(blog);
    setMArked(true)

   }
  }

  return (
    <div className=" p-4 m-4">
      <img
        className="p-8 md:w-ful "
        src={cover_image}
        alt={`cover picture of the image of title ${title}`}
      />
      <div className="flex justify-between">
        <div className="flex">
          <img
            className="items-center h-10 w-10 rounded-full m-5 "
            src={author_image}
            alt=""
          />
          <div className="my-5 items-center">
            <h2 className="font-bold text-md">{author_name}</h2>
            <p className="text-gray-500">{post_date}</p>
          </div>
        </div>
        <div className="">
          <p className="text-gray-500 my-5">
            {reading_time} min read <FontAwesomeIcon onClick={handleIconMarked} icon={isregular ? solidBookmark : regularBookmark} /> 
            
          </p>
        </div>
      </div>
      <h2 className="tex-4xl px-5 text-2xl font-semibold">{title}</h2>
      <p className="text-gray-500 font-semibold text-base p-4">
        {
        hashtag.map( (hash,idx)=> <span key={idx}> <a href="">#{hash}</a></span>)
        }
      </p>
      <button  onClick={handleMarkAsReadClick} className={`text-base p-4 ${isRead ? "text-gray-500": "text-blue-500"}`} >Mark As read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookmaed: PropTypes.func.isRequired,
  clickasread : PropTypes.func
  // author_title: PropTypes.string.isRequired,
  // cover_image: PropTypes.object.isRequired,
  // reading_time: PropTypes.number.isRequired,
};

export default Blog;
