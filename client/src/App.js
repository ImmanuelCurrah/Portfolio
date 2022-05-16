import { Routes, Route } from "react-router-dom";
// import smoothscroll from "smoothscroll-polyfill";

import "./App.css";
import HomePage from "./screens/homePage/HomePage";

function App() {
  window.__forceSmoothScrollPolyfill__ = true;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
