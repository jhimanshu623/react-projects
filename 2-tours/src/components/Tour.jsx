import React, { useState } from "react";

function Tour(props)
{
    const [readMore,setReadMore]=useState(false);

    return (
        <article className="single-tour">
            <img src={props.image} alt={props.name+" img"} />
            {/* we can also use <Footer> here */}
            <footer>   
                <div className="tour-info">
                    <h4>{props.name}</h4>
                    <h4 className="price-info">${props.price}</h4>
                </div>
                <p>
                    {readMore ? props.info : props.info.substring(0,200)+" ..."}
                    <button className="read-more-button" onClick={()=>setReadMore(!readMore)}>
                        {readMore?"Show less":"Show more"}
                    </button>
                </p>
                <button className="delete-button" onClick={()=>{
                    props.deleteTour(props.id)
                }}>Not Interested</button>
            </footer>
        </article>
    );
}
export default Tour;