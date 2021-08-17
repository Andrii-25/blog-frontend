import { combineReducers } from "redux";
import posts from "./post";
import comments from "./comment";

export default combineReducers({
  posts,
  comments,
});
