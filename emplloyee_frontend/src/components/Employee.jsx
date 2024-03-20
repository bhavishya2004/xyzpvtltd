import React, { Profiler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import List from "./List";

const Employee = () => {
  const navigate = useNavigate();
  const [employeeData, setData] = useState([]);
  var amountout= 0;
  var unitprofit = 0;
  var profit = 0;

  useEffect(() => {
    axios
      .get("http://localhost:3001/employeeData")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [employeeData]);

  return (
    <>
      <center>
        {/* <h3 className="he">
          Report of Annual Emplloyee expenses of ABCD PVT Ltd
        </h3> */}
        <button
          onClick={() => {
            navigate("/AddData");
          }}
        >
          Add Data
        </button>

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
            navigate("/Contacts");
          }}
        >
          Contacts
        </button>

        <h3 className="he">
          Report of Annual Emplloyee expenses of ABCD PVT Ltd
        </h3>

      </center>
      <div className="employeeList">
        <div className="employeeData">
          <div>id</div>
          <div> pnumber </div>
          <div>pname </div>
          <div> buyingprice </div>
          <div> bought </div>
          <div> amountout </div>
          <div> sellingprice </div>
          <div> sold </div>
          <div> stock </div>
          <div> unitprofit </div>
          <div> profit </div>

          {/* <div>total salary</div> */}
        </div>
        {employeeData.map((employee) => {
          {/* amountout = buyingprice * employee.bought;
          unitprofit=  sellingprice * employee.sold;
          Profit= amountout -  unitprofit;
      */}

          return (  
            <List
              key={employee.id}
              id={employee.id}
             pnumber={employee.pnumber}
              pname={employee.pname}
              buyingprice={employee.buyingprice}
              bought={employee.bought}
              amountout={employee.amountout}
              sellingprice={employee.sellingprice}
              sold={employee.sold}
              stock={employee.stock}
              unitprofit={employee.unitprofit}
              profit={employee.profit}

            />
          );
        })}
        <div>
          <div className="s1"> Total employess = { amountout} </div>
          <div className="s2"> Total Msalary = {unitprofit} </div>
          <div className="s3"> Total Ysalary = {profit} </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
