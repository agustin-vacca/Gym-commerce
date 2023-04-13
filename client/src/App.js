import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./Views/Detail/Detail";
import Error from "./componentes/Error/Error";
import Home from "./Views/Home/Home";
import Landing from "./Views/Landing/Landing";

function App() {

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
