//App.js

import React, { Component } from "react";
import "./App.css";
import MyModal from "./components/MyModal";
// import ModalComponent from "./components/ModalComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ModalComponent /> */}
        <MyModal />
      </div>
    );
  }
}

export default App;
