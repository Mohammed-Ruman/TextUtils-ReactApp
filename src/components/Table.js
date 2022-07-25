import React from "react";

const Table = (props) => {
  let res = [...props.reslt];
 
  return (
    <div
      class="card text-white bg-secondary mb-3 mx-auto"
      style={{ width: "250px" }}
    >
      <div class="card-header">
        <h2>Result</h2>
      </div>
      <div class="card-body">
        {/* <h5 class="card-title">Success card title</h5> */}
        {res.map((e) => (
          <li class="card-text">{e}</li>
        ))}
      </div>
    </div>
  );
};
export default Table;
