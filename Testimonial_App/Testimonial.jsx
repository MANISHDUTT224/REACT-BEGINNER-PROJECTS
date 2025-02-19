import { useState } from "react";
import './Testimonialstyle.css';

const Testimonial = () => {
    const testimonials=[
        {
            quote: "This is the best product I've ever used!",
            author: "Jane Doe",
          },
          {
            quote: "I highly recommend this product to everyone!",
            author: "John Smith",
          },
          {
            quote: "This product has completely changed my life!",
            author: "Bob Johnson",
          }
          
    ];
    const [currentindex,setcurrentindex]=useState(0);
    const handlePrev=()=>{
        setcurrentindex((currentindex+testimonials.length-1)%testimonials.length);
    }
    const handleNext=()=>{
        setcurrentindex((currentindex+1)%testimonials.length);
    }
  return (
    <>
    
     <div className="testimonials">
        <div className="testimonials-author">
            {testimonials[currentindex].author}
        </div>
        <div className="testimonials-quote">
            -{testimonials[currentindex].quote}
        </div>
        <div className="testimonials-nav">
        <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>

        </div>
            
    </div>
    </>
   
  )
}

export default Testimonial
