import React from 'react'
import ReviewCard from '../layouts/ReviewCard'
import img1 from '../assets/review1.png'
import img2 from '../assets/review2.png'
import img3 from '../assets/review3.png'

const Review = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center md:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10'>
        Customer's Review
      </h1>
      <div className='flex flex-col md:flex-row gap-5 mt-5'>
        <ReviewCard img={img1} name="Brian Mackin" text="New Golden Pacific is my absolute favorite Chinese food restaurant. Their food is so consistently good, cooked fresh, and always tastes great. The staff are great, they are very timely and courteous. I love that they are open late, but they have great lunch specials as well. Save yourself some time and order online, their site works great. They have excellent combos, my favorite is the #35 pictured here. Wings are always outstanding - crispy, meaty, juicy. Beef teriyaki always hits the spot - always tender and great flavor. Boneless spare ribs that will put you in your happy place. Chicken fingers are delightful - great texture on the batter and always nice pieces of chicken. Pork fried rice, which is a must-have with any order! I have always been a fan, highly recommended.!"/>
        <ReviewCard img={img2} name="Tiffany Thieu Cignoll" text="The food is yummy! They accommodated my dietary needs. Also, the individuals working here are very nice. Additionally, my husband got a drink. It was tasty and half the price of what a cocktail at any other bar would be. I love that this place is open late to satisfy our late night cravings!"/>
        <ReviewCard img={img3} name="Marcus Spencer" text="If ever in Holbrook and you want Chinese Food I highly recommend this place!! The food is very 👍🏾 made fresh to order not a sit around type of place."/>
      </div>
    </div>
  )
}

export default Review