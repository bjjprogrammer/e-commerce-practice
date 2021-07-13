import React from "react";

import Tag from "./Tag";

const Tags = () => {
  return (
    <div className="Tags">
      <h1>What can you find</h1>
      <div className="container mt-5">
        <div className="row">
          <Tag />
          <Tag />
          <Tag />
        </div>
      </div>
    </div>
  );
};

export default Tags;
