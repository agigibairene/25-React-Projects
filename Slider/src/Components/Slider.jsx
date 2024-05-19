import { useState } from 'react';
import { FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import people from './data';

import "./style.css";

export default function Slider(){
    const [data, setdata] = useState(people);
    const [Index, setindex] = useState(0);

    return(
        <section className="section-center">
            <div className="title">
                <h2>
                    <span>/</span>
                    Reviews
                </h2>
            </div>
            <div className="section-center">
                {
                    data.map((person, index) =>{
                        const {id, image, name, title, quote} = person;
                        return (<article key={id}>
                            <img src={image}  alt={name}/>
                            <h4>{name}</h4>
                            <p>{title}</p>
                            <p>{quote}</p>
                            <FaQuoteRight className="icon"/>
                        </article>)
                    })
                }
            </div>
            <button className='prev'>
                <FiChevronLeft />
            </button>
            <button className='next'>
                <FiChevronRight />
            </button>
        </section>
    )
}