import React from 'react'
import Button from '../layouts/Button'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 '>
        <div>
            <h1>Elevate you tastes buds with every bite</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit iusto voluptatem, quod voluptate voluptatum. Assumenda dicta beatae repudiandae. Sit quod aspernatur ab alias non est numquam libero unde cum?
            </p>
            <div>
                <Button title="Order Now"/>
            </div>
        </div>
    </div>
  )
}

export default Home