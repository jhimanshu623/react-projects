import {React ,useState, useEffect} from "react";
import Tours from "./Tours";
import Loading from "./Loading";
const url='https://course-api.com/react-tours-project';

function App()
{
    const [tours,setTours]=useState([]);
    const [isLoading,setIsLoaing]=useState(true);

    function deleteTour(id)
    {
        setTours(tours.filter(tour=>{
            return tour.id!==id;
        }));
    }

    function fetchData()
    {
        setIsLoaing(true);
        fetch(url)
        .then(res=>{
            console.log(res);
            if(res.status>=200 && res.status<=300)
                return res.json();
            else{
                throw new Error(res.statusText);
            }
        })
        .then(data=>{
            console.log(data);
            setIsLoaing(false);
            setTours(data);
        })
        .catch(err=>{
            setIsLoaing(false);
            console.log(err);
        });
    }
    
    useEffect(() => {
        fetchData();
    },[]);

    if(isLoading)
    {
        return (
            <main>
                <Loading />
            </main>
        );
    }
    else if(tours.length===0)
    {
        return (
            <main>
                <div className="tours-title">
                    <h1>No Tours Left</h1>
                    <button className="refresh-button" onClick={fetchData}>Refresh</button>
                </div>
            </main>
        );
    }
    return (
        <main>
            <Tours data={tours} deleteTour={deleteTour} />
        </main>
    );

    // ************ shorthand for upper code ********  

    // return (
    //     <main>
    //         { isLoading ? <Loading /> : tours.length > 0 ? <Tours data={tours} deleteTour={deleteTour} /> : <div>
    //             <h2>No Tours Left</h2>
    //             <button onClick={fetchData}>Refresh</button>
    //         </div>}
    //     </main>
    // );
}
export default App;