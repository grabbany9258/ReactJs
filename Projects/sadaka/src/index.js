import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./components/Home";
import About from "./components/About";
import Cause from "./components/Cause";
import SingleCause from "./components/SingleCause";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import UserList from "./users/UserList";
import AllProduct from "./product/AllProduct";



export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cause" element={<Cause />} />
          <Route path="/singlecause" element={<SingleCause />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/allproduct" element={<AllProduct />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
);


reportWebVitals();
