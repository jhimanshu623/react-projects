import React, {useState} from "react";
import data from "./Data";
import List from "./List";

function App()
{
    const [persons,setData]=useState(data);
    return (
        <main>
            <section class="container">
                <div>
                    <h3>{persons.length} birthdays today</h3>
                </div>
                <List data={persons}/>
                <div>
                    <button onClick={()=>setData([])}>Clear All</button>
                </div>
            </section>
        </main>
    );
}

export default App;