import React from "react";
import { useState } from "react";
import Table from "./Table";
import  "./TextForm";

const About = () => {
  const [tableNum, setTableNum] = useState();
  const [uptoNum, setUptoNumber] = useState(10);
  const [resarr, setResarr] = useState([]);
  let res = [];

  const tbchangeHandler = (event) => {
    let text = event.target.value;
    setTableNum(text);
  };

  const utchangehandler = (event) => {
    let text = event.target.value;
    setUptoNumber(text);
  };

  const calTable = () => {
    for (let i = 1; i <= uptoNum; i++) {
      let num = tableNum + " X " + i + " = " + tableNum * i;

      res.push(num);
    }

    setResarr(res);
  };

  return (
    <>
      <div className="container ">
        <h1 className="text-center" id="hd">
          {" "}
          Multiplication Table Creator{" "}
        </h1>
      </div>
      <div className="container">
        <form action="" className="d-flex container my-3">
          <label htmlFor="" className="mx-auto" id="hd" style={{width:"50px"}}>
            Number 
          </label> 
          <input 
            
            type="number"
            placeholder="Ex:- 5"
            onChange={tbchangeHandler}
            value={tableNum}
          />
          <label htmlFor="" className="mx-auto" id="hd">
            Upto{" "}
          </label>
          <input
            type="number"
            placeholder="Ex:- 10"
            onChange={utchangehandler}
            value={uptoNum}
          />
        </form>
        <div className="container text-center">
          <button disabled={tableNum==null} className="btn btn-primary" onClick={calTable}>
            Calculate
          </button>
        </div>
        <div className="container text-center my-5">
          <Table reslt={resarr} />
        </div>
      </div>
    </>
  );
};

export default About;
