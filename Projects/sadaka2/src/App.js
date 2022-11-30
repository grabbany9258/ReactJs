import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Index from "./pages/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
