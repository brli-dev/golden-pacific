import React from 'react'
import Button from '../layouts/Button'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url("./assets/golden_pacific.jpg")] bg-cover bg-no-repeat'>
        <div className='w-full lg:w-2/3 space-y-5'>
            <h1 className='text-backgroundColor font-semibold text-6xl'>New Golden Pacific in Holbrook</h1>
            <p className='text-backgroundColor'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit iusto voluptatem, quod voluptate voluptatum. Assumenda dicta beatae repudiandae. Sit quod aspernatur ab alias non est numquam libero unde cum?
            </p>
            <div className='lg:pl-44'>
                <Button title="Order Now"/>
            </div>
        </div>
    </div>
  )
}

export default Home