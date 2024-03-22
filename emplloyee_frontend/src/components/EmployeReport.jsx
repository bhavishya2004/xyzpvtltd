import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import List1 from "./List1";

const EmployeReport  = () => {
  const navigate = useNavigate();
  const [employeeData, setData] = useState([]);
  var mtotalsalary = 0;
  var ytotalsalary = 0;
  var totalEmployess = 0;
  var tax = 0 ;
  var insurance = 0;
  var hra = 0;


  useEffect(() => {
    axios
      .get("http://localhost:3001/employeeData1")
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
          <div>id</div>
          <div> e_name </div>
          <div> e_monthly_salary </div>
          <div> e_yearly_salary </div>
          <div>tax</div>
          <div>insurance</div>
          <div>hra</div>
        </div>
        {employeeData.map((employee) => {
          mtotalsalary = mtotalsalary + employee.e_monthly_salary;
          ytotalsalary = ytotalsalary + employee.e_monthly_salary * 12;
          tax = ytotalsalary * 0.2;
          insurance  = ytotalsalary * 0.1;
          hra = ytotalsalary * 0.3;
         totalEmployess++;

          return (
            <List1
              key={employee.id}
              id={employee.id}
              e_name={employee.e_name}
              e_monthly_salary={employee.e_monthly_salary}
              e_yearly_salary={employee.e_yearly_salary}
              tax={tax}
              insurance={insurance}
              hra = {hra}
            />
          );
        })}
        <div>
        <div>Total Emplloyess = {totalEmployess}</div>
        <div className="s1"> Total Month salary = {mtotalsalary} </div>
        <div className="s2"> Total Year salary = {ytotalsalary} </div>
       

        </div>
      </div>
    </>
  );
};

export default EmployeReport ;







// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const EmployeReport = () => {
//     const navigate = useNavigate();
//   return (
//     <>
//     <div>EmployeReport</div>

//     <button
//         onClick={() => {
//             navigate("/");
//         }}
//         >GO BACK</button>
//     </>
//   )
//  }

// export default EmployeReport