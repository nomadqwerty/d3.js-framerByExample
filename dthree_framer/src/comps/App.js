import React from "react";
import Chart from "./d3/chart";
import { VerticalBar } from "./d3/verticalBar";
import { HorizontalBar } from "./d3/HorizontalBar";
import "../comps/css/d3.css";

const App = () => {
  let a = 1;
  return (
    <div>
      {/* chart.js */}
      {/* {a ? <VerticalBar /> : <Chart />} */}
      <Chart />
      <VerticalBar />
      <HorizontalBar />
      {/* framer motion */}
    </div>
  );
};

export default App;
