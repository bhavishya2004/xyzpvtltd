import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const List1 = (props) => {
  const navigate = useNavigate()
    const {id,e_name,e_monthly_salary,tax,insurance,hra} = props;
     const e_yearly_salary = e_monthly_salary * 12 ;

    //  const mtotalsalary = 0
    //  const ytotalsalary = 0
    //  const total = e_yearly_salary+e_monthly_salary;
   



      const handleDelete=()=>{
        
         try {
             axios.post("http://localhost:3001/delete1",{id})
             .then((res)=>{console.log(res)})
             .catch((err)=>{console.log(err)});
 
         } catch (error) {
            console.log(error) 
         }
     }



  return (
    <div className='employeeData'>
        <div>{id}</div>
        <div>{e_name}</div>
        <div> {e_monthly_salary} </div>
        <div> {e_yearly_salary} </div>
        <div> {tax} </div>
        <div>{insurance}</div>
        <div>{hra}</div>
        
      
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => {navigate(`/Update1/${id}`)}}>Update</button>
    </div>
  );
}

export default List1