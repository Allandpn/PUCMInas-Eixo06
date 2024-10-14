import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-main">
        <div className="app-content">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
