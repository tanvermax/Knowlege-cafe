import { useState } from "react";
import "./App.css";
import Blogs from "./Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


  const handleAddBookmaed = (blog) => {
    const newBookmards = [...bookmarked, blog];
    setBookmarked(newBookmards);
  };



  const habdleMarkasread = (id,time) => {
    

    const newReadingTime = readingTime+ time;
    setReadingTime(newReadingTime);
    // removed thr red blog from bookmard
    // console.log('removes bookmarkk id',id);
    const remainingBookmarks = bookmarked.filter(bookmark => bookmark.id !== id);
    setBookmarked(remainingBookmarks);

  };


  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddBookmaed={handleAddBookmaed}
          habdleMarkasread={habdleMarkasread}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarked={bookmarked}></Bookmarks>
      </div>
    </>
  );
}

export default App;
