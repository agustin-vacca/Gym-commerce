import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./componentes/Detail/Detail";
import Error from "./componentes/Error/Error";
import Home from "./componentes/Home/Home";
import Landing from "./componentes/Landing/Landing";

function App() {

  console.log("hola");
  console.log("hola");
  console.log("hola");
  console.log("como");
  console.log("andas");
  console.log("hola");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
