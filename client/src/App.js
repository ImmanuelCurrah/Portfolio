import { Routes, Route } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";
import "./App.css";
import HomePage from "./screens/homePage/HomePage";

smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
