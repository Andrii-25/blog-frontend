import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./actions/post";
import { getComments } from "./actions/comment";
import NavBar from "./components/NavBar";

function App() {
  // const dispatch = useDispatch();
  // const posts = useSelector((state) => state.posts);
  // const comments = useSelector((state) => state.comments);

  // useEffect(async () => {
  //   await dispatch(getPosts());
  //   await dispatch(getComments());
  // }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Posts</h1>
      {/* {JSON.stringify(posts)} */}
      <h1>Comments</h1>
      {/* {JSON.stringify(comments)} */}
    </div>
  );
}

export default App;
