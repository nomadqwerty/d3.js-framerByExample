import React, { useEffect } from "react";
import "../css/d3.css";
import * as d3 from "d3";

const dummy = [
  { id: 1, value: 10, region: "Nigeria" },
  { id: 1, value: 11, region: "Ghana" },
  { id: 1, value: 12, region: "Congo" },
  { id: 1, value: 7, region: "Soweto" },
];
const D3 = () => {
  useEffect(() => {
    const d3div = d3
      .select("div")
      .classed("d3div", true)
      .style("border", "1px solid red");

    d3div
      .selectAll(".bar")
      .data(dummy)
      .enter()
      .append("div")
      .classed("bar", true)
      .style("height", (dta) => {
        let val = dta.value;

        val = (500 / 100) * val * 5;

        return `${val}px`;
      })
      .text((dta) => dta.region);
  });

  return (
    <div className="d3div" style={{ width: "200px", height: "500px" }}></div>
  );
};

export default D3;
