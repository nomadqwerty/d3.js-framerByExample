import React from "react";
import Chart from "./d3/chart";
import { VerticalBar } from "./d3/verticalBar";
import "../comps/css/d3.css";

const App = () => {
  return (
    <div>
      {/* chart.js */}
      <Chart />
      <VerticalBar />

      {/* framer motion */}
    </div>
  );
};

export default App;
