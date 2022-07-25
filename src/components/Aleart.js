import React from "react";

const Aleart = (props) => {
  const cap = (word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  };

  return (
    <div style={{height:"50px"}}>
    {props.aleart && (
      <div
        className={`alert alert-${props.aleart.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{cap(props.aleart.type)}</strong> : {props.aleart.msg}
      </div>
    )}
    </div>
  );
};

export default Aleart;
