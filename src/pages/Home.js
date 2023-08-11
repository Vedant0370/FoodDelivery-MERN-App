import React from 'react'

const Home = () => {
  return (
    <>
    <div>Welcome to Home Page</div>
    <ul className='table' style={{display:"flex",justifyContent:"space-evenly"}}>
      <li>Products</li>
      <li>Brands</li>
      <li>Food</li>
      <li>New Products</li>
    </ul>
    </>
  )
}

export default Home