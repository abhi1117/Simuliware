import React from "react";
import JSSS from "./JSSS/JSSS";
import "./Shopfloorsevices.css";
import SFLS from "./SFLS/SFLS";
import ALS from "./ALS/ALS";

export default function Shopfloorservices() {
  return (
    <div style={{ backgroundColor: "#E7E9EB", paddingBottom: "40px" }}>
      <JSSS />
      <SFLS />
      <ALS />
    </div>
  );
}
