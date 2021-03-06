import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const PostIndexItem = ({ post, props }) => {
  const [display, setDisplay] = useState(false);
  let betterUrl = post.photoUrl.split("?")[0];
  // let width = (window.innerWidth * 0.9) / 4;
  // let myFlexGrow = imgRef.naturalWidth > width ? 2 : 1;
  // let myDisplay = display ? <div className="div-test">{post.title}</div> : "";

  // const getParentWidth = postId => {
  //   if (!postId) return;
  //   let parent = document.getElementById(postId);
  //   if (!parent) return;
  //   return parent.offsetWidth;
  // };

  return (
    // <div className="test-container" id={post.id}>
    <img
      className="photo-post-index-photo"
      src={`https://res.cloudinary.com/ddtykf72z/image/fetch/c_fill,g_center,f_auto,h_400/${betterUrl}`}
      onClick={e => props.history.push(`/posts/${post.id}`)}
      style={{
        flexGrow: 1,
        flexBasis: "auto"
        // width: getParentWidth(post.id)
      }}
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    />
    // <div>{myDisplay}</div>
    // </div>
  );
};

export default PostIndexItem;

//

// <div className="div-test" style={{ display: myDisplay }}>
//       {post.title}
//     / </div>
//      {myDisplay}
//     {" "}
//   </div>
