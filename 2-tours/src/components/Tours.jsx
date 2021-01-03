import React from "react";
import Tour from "./Tour";


function Tours({data,deleteTour})
{
    return (
        <section>
            <div className="tours-title">
                <h1>Our Tours</h1>
                <hr></hr>
            </div>

            <div>
                {data.map(tour=>{
                    return (
                        <Tour 
                            key={tour.id}
                            {...tour}
                            deleteTour={deleteTour}
                        />
                    );
                })}
            </div>
        </section>
    );
}
export default Tours;