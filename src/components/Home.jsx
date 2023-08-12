import React from 'react'
import vg from "../assests/w.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    
    <div className='home' id='home'>

        <main>

            <h1>
                Techystar
            </h1>
            <p>
We provide solutions 
            </p>
        </main>
</div>
<div className='home2'>

<img src= {vg} alt="graphics" />


<div>

    <p>

        We are your one and only feasible solution the tech problem you face eveyday .
        We are the problem solving company whose aim is to improve problem solving abilities in children.
        So come to us we can handle your problem and give you a solutin
    </p>
</div>
</div>

<div className="home3" id='about'>

    <div>

    <h1>Who we are?</h1>
    <p>
    "Welcome to TechyStar - Your Guiding Light in the Digital Universe!

At TechyStar, we are your trusted tech-savvy companions, ready to illuminate your path through the ever-evolving digital landscape. Whether you're facing a perplexing tech challenge or seeking expert advice, we're here to serve as your one-stop solution hub, catering to all your digital and tech-related needs.

From battling those annoying bugs and glitches to unraveling the complexities of cutting-edge technologies, our team of brilliant minds is dedicated to crafting the most effective and reliable solutions just for you. We understand that in this fast-paced digital age, time is of the essence, and that's why we prioritize delivering swift, fail-proof answers that work like magic!

What sets TechyStar apart is our relentless pursuit of excellence. We believe that every problem can be turned into an opportunity for growth, and that's the mantra we live by. Our arsenal of innovative strategies and ingenious hacks ensures that you not only conquer your tech woes but also emerge as a tech-savvy superstar yourself!

Our user-friendly interface is designed with you in mind, making navigation a breeze, and access to solutions as easy as pie. No matter your level of expertise, whether you're a tech enthusiast or a digital novice, we're here to hold your hand and guide you through every step of your tech journey.

At TechyStar, we don't just believe in providing solutions; we believe in fostering a thriving community. Our passionate team of tech enthusiasts loves nothing more than sharing their knowledge, engaging in thought-provoking discussions, and collaborating with fellow users like you. Together, we forge a powerful alliance, empowering you to embrace the wonders of the digital world with confidence and zeal.

So, if you're ready to unlock the full potential of technology, look no further than TechyStar. Join our ever-growing family of tech aficionados, and together, we'll shine brightly in the vast expanse of the digital universe. Embrace the future with us, and let's reach for the stars, one tech solution at a time!"



    </p>




    </div>
</div>

<div className="home4" id='brands'>
    <div>


<h1>
    Brands
</h1>

    <article>
      <div style={{animationDelay:"0.3s"}}>
        <AiFillGoogleCircle/>
        <p> Google</p>
</div>
    <div style={{animationDelay:"0.5s"}}>
        <AiFillAmazonCircle/>
        <p> Amazon</p>
</div>
    <div style={{animationDelay:"0.7s"}}>
        <AiFillInstagram/>
        <p> Instagram</p>
</div>
    <div style={{animationDelay:"0.9s"}}>
        <AiFillYoutube/>
        <p> Google</p>
</div>
 </article>


</div>

</div>
</>

  )
  
}

export default Home
