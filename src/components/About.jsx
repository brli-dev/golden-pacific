import React from 'react'
import img from "../assets/2021-06-30.png"
import Button from "../layouts/Button"

const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5'>
        <img className="md:px-4 md:py-4 sm:px-4 sm:py-4" src={img} alt="img"/>
        <div className='space-y-4 lg:pt-14'>
            <h1 className='font-semibold text-4xl text-center md:text-start'>About Us</h1>
            <p>At New Golden Pacific Holbrook we offer meals of excellent quality and invite you to try our delicious food.</p>
            <p>The key to our success is simple: providing quality consistent food that taste great every single time. We pride ourselves on serving our customers delicious genuine dishes like: Chinese</p>
            <p>Eat delicious food. Grab a drink. But most of all, relax! We thank you from the bottom of our hearts for your continued support.</p>
            <div className='flex justify-center lg:justify-start'>
                <Button title="Learn More"/>
            </div>
        </div>
    </div>
  )
}

export default About