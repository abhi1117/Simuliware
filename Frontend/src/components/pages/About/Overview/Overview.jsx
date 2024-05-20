import React, { useRef } from "react";
import "./Overview.css";
import Aboutimg from "./Overview.jpg";

const Overview = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <div className="about" ref={aboutRef}>
        <div
          className="centered"
          onClick={scrollToAbout}
          style={{ color: "#E8309E" }}
        >
          <h4>
            <span style={{ color: "#8630E8" }}>LEARN MORE </span>ABOUT US
          </h4>
        </div>

        <div className="aboutcontent">
          <img src={Aboutimg} alt="About" className="abtimg" />
          <div className="abouttext">
            <p className="wrapped-paragraph">
              Simulation and Optimization as a Service (SOaaS) represents a
              transformative approach to accessing advanced computational
              techniques without the need for significant upfront investments or
              specialized infrastructure. Through SOaaS, organizations gain
              access to simulation and optimization capabilities delivered via
              cloud-based platforms on a subscription basis. This model
              democratizes access to powerful tools, enabling businesses of all
              sizes to leverage simulation for modeling complex systems and
              optimization for finding optimal solutions within various
              constraints. One of the key advantages of SOaaS is its
              cost-effectiveness, as it eliminates the need for organizations to
              purchase and maintain expensive software licenses or hardware
              infrastructure. Moreover, SOaaS offers scalability, allowing users
              to scale their computational resources based on demand, thus
              accommodating fluctuating workloads and large-scale projects.
              Accessibility is another significant benefit, as SOaaS platforms
              make sophisticated simulation and optimization tools accessible to
              a broader audience, including users with limited expertise in
              these domains. Additionally, the collaborative nature of
              cloud-based platforms facilitates teamwork and integration with
              other services and data sources, streamlining workflows and
              enhancing productivity. Overall, Simulation and Optimization as a
              Service empower organizations to tackle complex problems, optimize
              processes, and drive innovation in a flexible, cost-effective, and
              collaborative manner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
