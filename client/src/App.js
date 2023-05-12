
import "./App.css";
import AllPost from "./components/allPost/AllPost";
import PostDetails from "./components/PostDetails/PostDetails";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import AddPost from "./components/addPost/AddPost";
import UpdatePost from "./components/update/updatePost";
import AddComment from "./components/comments/Addcomm";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/add" element={<AddPost />}/>
        <Route path="/" element={<AllPost />}/>
        <Route path="/post/:ID_post" element={<PostDetails />} />
        <Route path="/update/:ID_post" element={<UpdatePost/>} />
        <Route path="/posts/:ID_post/comments" element={<AddComment/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

