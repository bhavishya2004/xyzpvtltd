import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const List2 = (props) => {
  const navigate = useNavigate();
  const { id, e_name, e_monthly_salary } = props;
  const e_yearly_salary = e_monthly_salary * 12;

  //  const mtotalsalary = 0
  //  const ytotalsalary = 0
  //  const total = e_yearly_salary+e_monthly_salary;

  const handledelete2 = () => {
    const id = props.id;
    try {
      axios
        .post("http://localhost:3001/delete2", { id })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div className='employeeData2'>
    // <div className='employeeData21'>
    //     <div> id : {id}</div>
    //     <div>name : {e_name}</div>
    //     <div>Msalary : {e_monthly_salary} </div>
    //     <div>Ysalary : {e_yearly_salary} </div>
    //     {/* <div> {total} </div> */}

    //     <button onClick={handledelete2}>delete2</button>
    //     <button onClick={() => {navigate(`/Update2/${id}`)}}>Update2</button>  </div>
    // </div>

    <div className="card">
      <div className="top">
        <h3 className="name">e_name :{e_name}</h3>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        {/* <p className="info">{props.name}</p> */}
        <p className="info">e_Msalary : {props.e_monthly_salary}</p>
        {/* <p className="info">e_imgUrl : {props.imgurl}</p> */}
        <p className="info">e_Ysalary : {e_yearly_salary}</p>
        <button className="lb2"
         conClick={handledelete2}>delete2</button>
        <button  className="lb2"
          onClick={() => {
            navigate(`/Update2/${id}`);
          }}
        >
          Update2
        </button>
      </div>
    </div>
  );
};

export default List2;
