import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const navigate= useNavigate ();
  return (
    <>
         <section id="Product">
        <ul>
            <li>Bag</li>
            <img src="https://tse1.mm.bing.net/th?id=OIP.lXULWv3zhaUIlIvlrxaFOQHaHa&pid=Api&P=0&h=180" alt="bag"/>
            <li>Laptop</li>
            <img src="https://tse4.mm.bing.net/th?id=OIP.5EZRHGR0LgL2IWcQ511TkQHaF5&pid=Api&P=0&h=180" alt="laptop"/>
            <li>Tv</li>
            <img src="https://tse3.mm.bing.net/th?id=OIP.0TLlWm78ccNWVCKjFwmM3QHaE7&pid=Api&P=0&h=180" alt="TV"/>
            <li>Cooler</li>
            <img src="https://tse1.mm.bing.net/th?id=OIP.o7Tn0ve9C_-oE6xxiM0JZAHaHa&pid=Api&P=0&h=180" alt="Cooler"/>
            <li>Mouse</li>
            <img src="https://tse1.mm.bing.net/th?id=OIP._GZZrHyr_Ckc3lPBPyT4vAHaFw&pid=Api&P=0&h=180" alt="Mouse"/>
            <li>Clock</li>
            <img src="https://tse3.mm.bing.net/th?id=OIP.bdQzeIYZOxKwWb9N-rQj4wHaHa&pid=Api&P=0&h=180" alt="Clock"/>
            <li>Mobile</li>
            <img src="https://tse2.mm.bing.net/th?id=OIP.BQhwKHwVYvkFSiV6jwk_RAHaHj&pid=Api&P=0&h=180" alt="Mobile"/>
        </ul>
        <button
        onClick={() => {
            navigate("/");
        }}
        >GO BACK</button>
    </section>
    </>
  )
}

export default Product