import React from "react";
import Bitmoji from "./Bitmoji";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <Bitmoji imgURL={props.imgURL} />
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Entry;
