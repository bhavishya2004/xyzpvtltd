import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddData1 = () => {
    const navigate = useNavigate()
    const [e_name,setName] = useState("")
    
    const [e_monthly_salary,setMonthlySalary] = useState("")
    const [e_yearly_salary,setYearlySalary] = useState("")
  

const handleSubmit = (e) =>{
e.preventDefault()

axios
.post("http://localhost:3001/addEmployee1", {e_name,e_monthly_salary,e_yearly_salary})
.then(
  (response) => {
   console.log(response.data);
   navigate('/EmployeReport')
    }
  )
.catch(
  (error) => {
    console.log(error);
  }
  )

}


  return (
    <div>
        <form onSubmit={handleSubmit}>
            
            <input type='text' placeholder='Entre your name' name='e_name' value={e_name} onChange={(e)=>{setName(e.target.value)}} required />
            <input type='number' placeholder='monthly salary' name='e_monthly_salary' value={e_monthly_salary} onChange={(e)=>{setMonthlySalary(e.target.value)}} required />
            <input type='number' placeholder='yearly salary' name='e_yearly_salary' value={e_yearly_salary} onChange={(e)=>{setYearlySalary(e.target.value)}} required />
            
            <input type='submit' value="submit" />
        </form>
    </div>
  )
}

export default AddData1;