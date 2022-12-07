import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./files/Main";
import Home from "./files/Home";
import About from "./files/About";
import Causes from "./files/Causes";
import Service from "./files/Service";
import Donate from "./files/Donate";
import Team from "./files/Team";
import Testimonial from "./files/Testimonial";
import Contact from "./files/Contact";
import Members from "./files/Members";
import MyModal from "./components/MyModal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/service" element={<Service />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/members" element={<Members />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mymodal" element={<MyModal />} />
      </Route>
    </Routes>
  );
}

export default App;
