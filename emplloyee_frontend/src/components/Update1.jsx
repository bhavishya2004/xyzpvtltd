import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Update1 = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [e_name, setName] = useState("")
    const [e_monthly_salary, setMonthlySalary] = useState("")
    const [e_yearly_salary, setYearlySalary] = useState("")
    useEffect(() => {
        axios.post("http://localhost:3001/getUpdateData1", {id})
            .then(res => {
                setName(res.data.e_name);
                setMonthlySalary(res.data.e_monthly_salary);
                setYearlySalary(res.data.e_yearly_salary);

            })
            .catch(
                err => {console.log(err)},
            )

    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost:3001/Update1", {id,e_name,e_monthly_salary,e_yearly_salary})
                .then((response) => {
                    console.log(response);
                    navigate("/")
                })
                .catch((err) => { console.log(err) })

        } catch (error) {

        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Entre your name' name='e_name' value={e_name} onChange={(e) => { setName(e.target.value) }} required />
                <input type='number' placeholder='monthly salary' name='e_monthly_salary' value={e_monthly_salary} onChange={(e) => { setMonthlySalary(e.target.value) }} required />
                <input type='number' placeholder='yearly salary' name='e_yearly_salary' value={e_yearly_salary} onChange={(e) => { setYearlySalary(e.target.value) }} required />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Update1