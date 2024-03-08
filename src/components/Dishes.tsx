import React from 'react'
import DishesCard from '../layouts/DishesCard'
import scallion_pancakes from '../assets/img/scallion_pancakes.jpg'
import eggfooyoung from '../assets/img/eggfooyoung.jpg'
import friedrice from '../assets/img/friedrice.jpg'
import lomein from '../assets/img/lomein.jpg'
import padthai from '../assets/img/padthai.jpg'
import pupuplatter from '../assets/img/pupuplatter.jpg'


const Dishes = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center pt-24 pb-10'>Our Dishes</h1>
      <div className='flex flex-wrap gap-5 justify-center'>
        <DishesCard img={scallion_pancakes} title="Scallion Pancakes" price="$9.99"/>
        <DishesCard img={eggfooyoung} title="Egg Foo Young" price="$9.99"/>
        <DishesCard img={friedrice} title="Fried Rice" price="$9.99"/>
        <DishesCard img={lomein} title="Lo Mein" price="$9.99"/>
        <DishesCard img={padthai} title="Pad Thai" price="$9.99"/>
        <DishesCard img={pupuplatter} title="Pu Pu Platter" price="$9.99"/>
      </div>
    </div>
  )
}

export default Dishes