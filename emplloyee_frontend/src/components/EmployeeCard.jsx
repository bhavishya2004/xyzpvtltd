import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import List2 from "./List2";

const EmployeeCard = () => {
  const navigate = useNavigate();
  const [employeeData2, setData] = useState([]);
  var mtotalsalary = 0;
  var ytotalsalary = 0;
  var totalEmployess = 0;

  useEffect(() => {
    axios
      .get("http://localhost:3001/employeeData2")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [employeeData2]);

  return (
    <>
      <center>
        <h3 className="he">
          Report of Annual Emplloyee expenses of ABCD PVT Ltd
        </h3>
        <button
          onClick={() => {
            navigate("/AddData2");
          }}
        >
          Add Data
        </button>
      </center>
      <div className="employeeList2">
        <div className="employeeData">
          {/* <div>id</div>
          <div> e_name </div>
          <div> e_monthly_salary </div>
          <div> e_yearly_salary </div> */}

          {/* <div>total salary</div> */}
        </div>
        {employeeData2.map((employee) => {
          mtotalsalary = mtotalsalary + employee.e_monthly_salary;
          ytotalsalary = ytotalsalary + employee.e_monthly_salary * 12;
          totalEmployess = totalEmployess + 1

          return (
            <List2
              key={employee.id}
              id={employee.id}
              e_name={employee.e_name}
              e_monthly_salary={employee.e_monthly_salary}
              e_yearly_salary={employee.e_yearly_salary}
              img={employee.e_imgurl}
            />
          );
        })}
        {/* <div>
        <div>Total Emplloyess = {totalEmployess}</div>
        <div className="s1"> Total Month salary = {mtotalsalary} </div>
        <div className="s2"> Total Year salary = {ytotalsalary} </div>
        </div> */}
      </div>
    </>
  );
};

export default EmployeeCard;
