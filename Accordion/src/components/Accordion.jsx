import { useState } from "react";

import Star from "../assets/images/icon-star.svg";
import plus from "../assets/images/icon-plus.svg";
import Minus from "../assets/images/icon-minus.svg";
import questions from "./data";
import "./style.css";


export default function Accordion(){
    const [getId, setGetId] = useState();
    const [image, setImage] = useState(false);

    function handleSelection(Id){
        setGetId(getId === Id ? null : Id)
    }

    function handleImage(){
        setImage(toggle =>!toggle)
    }

    return(
        <div className="bg-image">
            <div className="container">
                <h1><img src={Star} /> FAQs</h1>
                {
                    questions && questions.map(item =>(
                        <div className="content" key={item.id}>
                            <div className="questions">
                                <div className="ques" onClick={() => handleSelection(item.id)}>
                                    <h4>{item.title}</h4>
                                    <img src={getId===item.id && image? Minus : plus } onClick={handleImage} className="view"/>
                                </div>
                            {item.id === getId ? <p>{item.info}</p> : ""}
                                <hr/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}