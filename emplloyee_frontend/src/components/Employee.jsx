import React, { Profiler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import List from "./List";

const Employee = () => {
  const navigate = useNavigate();


  return (
    <>
      
     
        <button onClick={()=>{
          navigate("/Aboutus");
        }}>Aboutus</button>

        <button
          onClick={() => {
            navigate("/Product");
          }}
        >
          Product
        </button>

        <button
          onClick={() => {
            navigate("/Turnoverreport");
          }}
        >
          Turnoverreport
        </button>

        <button
          onClick={() => {
            navigate("/EmployeReport");
          }}
        >
         EmployeReport
        </button>

        <button
          onClick={() => {
            navigate("/Contacts");
          }}
        >
          Contacts
        </button>


        <button
          onClick={() => {
            navigate("/EmployeeCard");
          }}
        >
          EmployeeCard
        </button>

        <img className="imgE" src="https://tse4.mm.bing.net/th?id=OIP.6IoR9dyxrCKArBErYA6LRAHaEv&pid=Api&P=0&h=180" width="1700" height="800" alt=""/>
      

    </>
  );
};

export default Employee;
