// import React, { Component } from 'react';
// import CommentList from './CommentList/CommentList';
// import './Comment.scss';

// class Comment extends Component {
//   render() {
//     const { commentList, commentValue } = this.state;

//     return (
//       <div className="comment">
//         <h1>Main Page</h1>
//         <ul>
//           {commentList.map(comment => {
//             return (
//               <CommentList
//                 clickEvent={this.changeColor}
//                 name={comment.userName}
//                 comment={comment.content}
//               />
//             );
//           })}
//         </ul>
//         <div className="commentInput">
//           <form onSubmit={this.addComment}>
//             <input
//               onChange={this.handleCommentValue}
//               type="text"
//               placeholder="enter comment"
//               value={commentValue}
//             />
//           </form>
//           <button className="addCommentBtn" onClick={this.addComment}>
//             Click
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Comment;
