import React from 'react'
import { useNavigate } from 'react-router-dom';

const Report = () => {
    const navigate = useNavigate();
  return (
    <>
        <button
          onClick={() => {
            navigate("/Turnoverreport");
          }}
        >
          Turnoverreport
        </button>

        <button
          onClick={() => {
            navigate("/TurnoverCard");
          }}
        >
          TurnoverCard
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
            navigate("/EmployeeCard");
          }}
        >
          EmployeeCard
        </button>

        <button
        onClick={() => {
            navigate("/");
        }}
        >GO BACK</button>
    </>
  )
}

export default Report