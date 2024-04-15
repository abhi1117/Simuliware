import React from "react";
import Lifedatacard from "./Lifedataanalysis/Lifedata";
import Reliabilitycard from "./RAE/RAE";
import Reliabilitytesting from "./Reliabilitytesting/Reliabilityss";

export default function Reliabilityservices() {
  return (
    <div style={{ backgroundColor: "#E7E9EB", paddingBottom: "40px" }}>
      <Lifedatacard />
      <Reliabilitycard />
      <Reliabilitytesting />
    </div>
  );
}
