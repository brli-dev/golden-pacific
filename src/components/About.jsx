import React from 'react'
import img from "../assets/2021-06-30.png"
import Button from "../layouts/Button"

const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5'>
        <img className="md:px-4 md:py-4 sm:px-4 sm:py-4" src={img} alt="img"/>
        <div className='space-y-4 lg:pt-14'>
            <h1 className='font-semibold text-4xl text-center md:text-start'>About Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non obcaecati ut officia dolor itaque, architecto iusto eaque ducimus nulla pariatur, repudiandae expedita quo et delectus nostrum ex reprehenderit. Ratione, totam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ab id eos dolorem esse ipsam quaerat et voluptates, perferendis eveniet eum, similique at fugit porro quidem cupiditate pariatur corrupti quae.</p>
            <div className='flex justify-center lg:justify-start'>
                <Button title="Learn More"/>
            </div>
        </div>
    </div>
  )
}

export default About