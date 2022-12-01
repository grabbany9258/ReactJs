import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
