import { useEffect } from "react";
import "./App.css";
import "react-multi-carousel/lib/styles.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { Route, Routes } from "react-router-dom";
import Article from "./pages/Article";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div className="bg-white h-[100vh] max-h-[100vh]">
      <Navbar />
      <div>
        <div className="pt-[80px]"></div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignIn />} />
          <Route path="article" element={<Article />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
