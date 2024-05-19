import { useState } from "react";
import "./style.css";
import text from "./data";

export default function Lorem(){
    const [numOfParagraphs, setNumOfParagraphs] = useState(1);
    const [paragraphs, setParagraphs] = useState();

    function handleParagraph(){
        // Checking if the requested number of paragraphs is not a negative number
        if (numOfParagraphs <= 0){
            setParagraphs(1) 
        }
        // Checking if the requested number of paragraphs does not exceed the maximum number of paragraphs available
        else if (numOfParagraphs > text.length){
            setParagraphs(text.length)
        }
        else{
            setParagraphs(numOfParagraphs)
        }
    }

    return(
        <article className="container">
            <h1>Tired of boring Lorem Ipsum?</h1>
            <div className="btns">
                <label htmlFor="num">Paragraph:</label>
                <input type="number" name="num" value={numOfParagraphs} onChange={(e) =>setNumOfParagraphs(e.target.value)}/>
                <button onClick={handleParagraph}>Generate</button>
            </div>
            {/* Use map and not filter function */}
            {text && text.map((para, index) => index < paragraphs && <div key={index} className="paragraph">
                <p>{para}</p>
            </div>) }
        </article>
    )
}