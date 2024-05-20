import { useState } from "react";
import values from "values.js";
import SingleColor from "./SingleColor";
import "./style.css";

export default function ColorGenerator(){
    const [error, setError] = useState(false);
    const [color, setColor] = useState();
    const [list, setList] = useState(new values("#329ba8").all(10))

    function handleColor(e){
        e.preventDefault();
        try{
            const colors = new values(color).all(10);
            console.log(colors);
            setList(colors);
        }
        catch(err){
            console.log(err);
            setError(true)
        }
       
    }

    return (
       <>
        <section className="container">
            <h3>Color generator</h3>
            <form onSubmit={handleColor}>
                <input type="text" placeholder="#329ba8" 
                    value={color} onChange={(e)=>setColor(e.target.value)}
                    className={`${error ? "error" : undefined}`}
                />
                <button>Submit</button>
            </form>
        </section>
        <section className="colors">
            {
                list && list.map((color,index) =>{
                    return <SingleColor key={index} {...color} hexColor={color.hex} index={index}/>
                }) 
            }
        </section>
       </>
    )
}