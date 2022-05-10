import { Routes, Route } from "react-router-dom"
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import SinglePost from "./pages/SinglePost";
import AppState from "./context/AppState";

function App() {
  return (
    <>
    <AppState>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<SinglePost />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      </AppState>
    </>
  );
}

export default App;
