import { Routes, Route } from "react-router-dom";
import Index from "./pages/index";

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
