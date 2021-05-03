import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

{
  /* <avatar> <card> <app> these all are react components can use where ever you want*/
}

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Info detailInfo={props.tel} />
        <Info detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
