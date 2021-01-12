import React, {useState} from "react";
import reviews from "./data";
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa";

function Review()
{
    const [idx,setIdx]=useState(0);

    const increaseIdx=()=>{
        setIdx((idx+1)%reviews.length);
    }
    const decreaseIdx=()=>{
        let pidx=(idx-1)%reviews.length;
        if(pidx<0)
            pidx+= reviews.length;
        setIdx(pidx);
    }
    const randomIdx=()=>{
        let ridx=Math.floor(Math.random()*reviews.length);
        setIdx(ridx);
    }
    let review=reviews[idx];
    return (
        <article className="review">
            <div className="img-container">
                <img src={review.image} alt={review.name+" img"} />
                <FaQuoteRight className="quote-icon" />
            </div>
            
            <h4>{review.name}</h4>
            <p className="review-job">{review.job}</p>
            <p className="review-text">{review.text}</p>
            <div>
                <button className="side-btn" onClick={decreaseIdx}>
                    <FaChevronLeft />
                </button>
                <button className="side-btn" onClick={increaseIdx}>
                    <FaChevronRight />
                </button> 
            </div>
            <button className="random-btn" onClick={randomIdx}>Surprise Me</button>
        </article>
    );
}

export default Review;