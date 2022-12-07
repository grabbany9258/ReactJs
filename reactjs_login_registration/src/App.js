import { Outlet } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default App;
