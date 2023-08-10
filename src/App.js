import "./App.css";
import Body from "./component/Body";
import Body1 from "./component/Body1";
import Body2 from "./component/Body2";
import Airing from "./component/Airing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wallpaper from "./component/Wallpaper";
/* eslint-disable */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body/>} />
          <Route path="/Body1" element={<Body1/>} />
          <Route path="/Wallpaper" element={<Wallpaper/>} />
          <Route path="/Airing" element={<Airing/>} />
          <Route path="/Body2" element={<Body2/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
