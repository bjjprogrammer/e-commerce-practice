import React from "react";

import Heading from "../components/Heading";
import Tags from "../components/Tags";

const Home = () => {
  return (
    <div className="Home">
      <div className="container mt-5">
        <Heading />
        <div className="container mt-5 text-center">
          <Tags />
        </div>
      </div>
    </div>
  );
};

export default Home;
