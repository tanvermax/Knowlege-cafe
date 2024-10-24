import PropTypes from "prop-types";
import Bookmark from "../../Bookmark/Bookmark";

const Bookmarks = ({bookmarked,readingTime}) => {

    
    return (
        
        <div className="md:w-1/3 bg-gray-300 ml-4">
            <div>
                <h3 className="text-4xl">Reading time :{readingTime}</h3>
            </div>
            <h2 className="p-4 m-4 bg-white rounded-lg font-semibold text-blue-500">Spent time on read : 177 min</h2>
            <h2 className="text-3xl text-center ">Bookmarks Blogs:{bookmarked.length}</h2>
            {

                bookmarked.map((bookmark, idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarked : PropTypes.array,
    readingTime : PropTypes.number
}

export default Bookmarks;