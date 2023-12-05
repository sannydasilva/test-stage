import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Article from "./components/article/Article";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
