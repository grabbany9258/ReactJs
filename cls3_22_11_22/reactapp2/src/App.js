import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/Header.js";
import Navbar from "./header/Navbar";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header
        brand="The Computers Limited"
        slogan="Make yourself Master in Machine"
      />
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <Sidebar />
          <Home />
        </div>
      </div>
      <Footer copyright="Copyright (c) all rights reserved the computers limited" />
    </>
  );
}

export default App;
