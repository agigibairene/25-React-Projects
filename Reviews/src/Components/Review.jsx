import "./style.css";
import reviews from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
export default function Review(){
    const [index, setIndex] = useState(0)
    const person = reviews[index];


    function scrollForward(){
        if (index >= (reviews.length - 1)){
            setIndex(0);
        }
        else{
            setIndex(count => count + 1);
        }
    }

    function scrollBack(){
        if (index <= 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(count => count - 1);
        }
    }

    function randomReviewGenerator(){
        const randomNumber = Math.floor(Math.random() * reviews.length);
        setIndex(randomNumber);
    }

    return(
        <main>
            <section className="container">
                <h2>Our Reviews</h2>
                <div className="underline"></div>
                <article className="person">
                    <div className="img-container">
                        <img src={reviews[index].image} alt={person.name} />
                    </div>
                    <span className="quote-icon">
                        <FaQuoteRight />
                    </span>
                    <h4>{person.name}</h4>
                    <p className="job">{person.job}</p>
                    <p>{person.text}</p>
                    <div className="scroll">
                        <FaChevronLeft onClick={scrollBack} className="back"/>
                        <FaChevronRight onClick={scrollForward} className="forward"/>
                    </div>
                    <button onClick={randomReviewGenerator}>Suprise Me</button>
                </article>
            </section>
        </main>
    )
}