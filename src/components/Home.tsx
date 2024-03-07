import React from 'react'
import Button from '../layouts/Button'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url("./assets/golden_pacific.jpg")] bg-cover bg-no-repeat'>
        <div className='w-full lg:w-2/3 space-y-5'>
            <h1 className='text-backgroundColor font-semibold text-6xl'>New Golden Pacific in Holbrook, MA</h1>
            <p className='text-backgroundColor'>
            At New Golden Pacific Holbrook we offer meals of excellent quality and invite you to try our delicious food. The key to our success is simple: providing quality consistent food that taste great every single time. We pride ourselves on serving our customers delicious genuine dishes like: Chinese. Eat delicious food. Grab a drink. But most of all, relax! We thank you from the bottom of our hearts for your continued support.
            </p>
            <div className='lg:pl-44'>
                <Button title="Order Now"/>
            </div>
        </div>
    </div>
  )
}

export default Home