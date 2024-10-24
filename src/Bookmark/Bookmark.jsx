import PropTypes from "prop-types";


const Bookmark = ({bookmark}) => {


const {title} = bookmark;

    return (
        <div className="bg-slate-200 m-4 p-4 rounded-md">
           <h3 className="text-xl">{title}</h3>
        </div>
    );
};

// Bookmark.PropTypes={
//     bookmark: PropTypes.object
// }

export default Bookmark;