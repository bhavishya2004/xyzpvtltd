import React, { Profiler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import List from "./List";

const Turnoverreport = () => {
  const navigate = useNavigate();
  const [employeeData, setData] = useState([]);
  var totalPurchaseAmount = 0;
  var totalSellingAmount = 0;
  var annualTurnoverAmount = 0;
  var amountIn = 0;
  var totalAmountIn = 0;
  var totalProfit = 0;
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
      <h3 className="he">
          Report of Annual Emplloyee expenses of ABCD PVT Ltd
        </h3>
        <button
          onClick={() => {
            navigate("/AddData");
          }}
        >
          Add Data
        </button>

      </center>
      <div className="employeeList">
        <div className="employeeData">
          <div id="id" className="bg">id</div>
          <div id="pn" className="bg"> Product <p>number</p> </div>
          <div className="bg"> Product  <p>name </p></div>
          <div className="bg"> Buying <p>price</p> </div>
          <div className="bg"> Product <p>bought</p> </div>
          <div className="bg"> amountout </div>
          <div className="bg"> Selling <p>price</p> </div>
          <div className="bg"> sold </div>
          <div className="bg">Amount In</div>
         <div className="bg"> stock </div>
          <div className="bg"> unit <p>profit </p></div>
          <div className="bg"> profit </div>
        </div>
       
        {employeeData.map((employee) => {
       { totalPurchaseAmount = totalPurchaseAmount + employee.amountout}
       { totalSellingAmount = totalSellingAmount + amountIn}
       { amountIn = employee.sellingprice * employee.sold}
       {totalAmountIn = totalAmountIn + amountIn}  
       {profit = totalProfit + profit}  
       {totalProfit= totalPurchaseAmount + totalSellingAmount}
       
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
              amountIn={amountIn}
              stock={employee.stock}
              unitprofit={employee.unitprofit}
              profit={employee.profit}
              

            />
          );
        })}
        <div>
          <div className="s1"> Total Purchase Amount = {totalPurchaseAmount} </div>
          <div className="s2"> Total Selling Amount = {totalSellingAmount} </div>
          <div className="s2"> Total amount in = {totalAmountIn} </div>
          <div className="s2"> profit = {profit} </div>
          <div className="s2"> annualTurnoverAmount = {totalProfit} </div>

          
        </div>
      </div>

      <button
        onClick={() => {
            navigate("/");
        }}
        >GO BACK</button>
    </>
  );
};

export default Turnoverreport;
