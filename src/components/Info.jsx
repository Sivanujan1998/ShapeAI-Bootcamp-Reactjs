import React from "react";

function Info(props) {
  return (
    <div>
      <a className="link" href="/">
        <div className="note">
          <h1>{props.title}</h1>
          <p>{props.dis}</p>
        </div>
      </a>
    </div>
  );
}

export default Info;
