import "./App.css";
import Favourite from "./Companent/Favourite/Favourite";
import Home from "./Companent/Home/Home";
import Navbar from "./Companent/Navbar/Navbar";
import Favoriteproduct from "./Context/Favoriteproduct";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Favoriteproduct>
        <Navbar />
        <Outlet />
      </Favoriteproduct>
    </div>
  );
}

export default App;
