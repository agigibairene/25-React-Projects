import { useState } from "react"
import "./style.css"
import menu from "./data"

export default function Menu(){
    const [category, setCategory] = useState("")
    console.log(category)
    return(
        <article className="container">
            <h1>Our Menu</h1>
            <div className="buttons">
                <button onClick={()=>setCategory("")}>All</button>
                <button onClick={()=>setCategory("breakfast")}>Breakfast</button>
                <button onClick={()=>setCategory("lunch")}>Lunch</button>
                <button onClick={()=>setCategory("shakes")}>Shakes</button>
                
            </div>
           
            <div className="dishes">
                
            {
                // You first filter the list of categories, but !category which means if there is no category
                // it should return the whole list of menu else it should return that particular category only
                menu && menu.filter(item => !category || item.category === category ).map(item => 
                (<div key={item.id} className="menu">
                        <img src={item.img} />
                       <div className="text">
                        <div className="title">
                            <h4>{item.title}</h4>
                            <p className="price">${item.price}</p>
                        </div>
                        <p>{item.desc}</p>
                        </div>
              
                </div>))
            }
            </div>
        </article>
    )
}