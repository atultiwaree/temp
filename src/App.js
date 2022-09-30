import React from "react";
import { useSelector } from "react-redux";
import { Buttons } from "./components/buttongroup";
const App = () => {
  const get = useSelector((state) => state);

  return (
    <div className="container" style={{ marginLeft: "30px" }}>
      <p>Counter Increase : {get.inc.num}</p>
      <p>Counter Decrease : {get.dec.num}</p>
      <Buttons />
    </div>
  );
};

export default App;
