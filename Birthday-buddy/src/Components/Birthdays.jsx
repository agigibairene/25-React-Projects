import { useState } from "react"
import data from "./data"
import "./style.css"
export default function Birthdays(){
    const [birthdays, setClearBirthdays] = useState(data)
    return (
       <div className="container">
           <h1>{birthdays ? birthdays.length : 0} Birthdays Today</h1>
        {
            birthdays.length > 0 && birthdays.map(item =>
                <div className="individual" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="name">
                        <h4>{item.name}</h4>
                        <p>{item.age} years</p>
                    </div>
                </div>
            ) 
        }
        <button onClick={() =>setClearBirthdays("")}>Clear All</button>
       </div>
    )
}