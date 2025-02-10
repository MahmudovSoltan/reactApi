import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Basket from "./pages/basket/Basket";
import Home from "./pages/home/Home";
import Leyout from "./components/leyout/Leyout";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <>
      <Leyout />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
