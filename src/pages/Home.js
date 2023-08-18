import React, { useState,useEffect } from 'react'
import './Home.css'
import axios from 'axios'
const Home = () => {

 

  const [newData, setNewData] = useState([]);

  useEffect(() => {
    // Fetch data and set it in the orderData state
    const getOrder = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:4000/cars`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const json = await response.json();
        setNewData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getOrder();
  }, []);
  
  return (
    <>
    <div className='main-div'>
      
    <div className=' heading text-danger text-center mt-5'>Welcome to Home Page</div>
    <ul className='table mt-5 ' style={{display:"flex",justifyContent:"space-evenly"}}>
      <li>Products</li>
      <li>Brands</li>
      <li>Food</li>
      <li>New Products</li>
    </ul>

    <ul className='table mt-5 ' style={{display:"flex",justifyContent:"space-evenly"}}>
      <li>Products</li>
      <li>Brands</li>
      <li>Food</li>
      <li>New Products</li>
    </ul>

    <ul className='table mt-5 ' style={{display:"flex",justifyContent:"space-evenly"}}>
      <li>Products</li>
      <li>Brands</li>
      <li>Food</li>
      <li>New Products</li>
    </ul>
    </div>

    {

newData.map((cval) => {

  return(<>
      <h1>ID :{cval.id}</h1>
      <h1>Price : {cval.totalPrice}</h1>
      <h1>Order On :{cval.ordered_on}</h1>
      <h1>Address : {cval.deliveryAddress}</h1>
  
  </>)
})
    }
    </>
  )
}

export default Home