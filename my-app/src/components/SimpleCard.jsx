import React from "react";
import "./css/type.css";
const SimpleCard = (props) => {
  return (
    <>
      <div className="simple-card">
        <div className="img-simple-card">
          <img src="https://picsum.photos/200"></img>
        </div>
        <div className="simple-card-details">
            {props.id}
        </div>
      </div>
    </>
  );
};

export default SimpleCard;
