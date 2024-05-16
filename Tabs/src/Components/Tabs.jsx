import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from 'react-icons/fa'
import "./style.css";

export default function Tabs(){

    const [fetchJobs, setFetchJobs] = useState([]);
    const [values, setValues] = useState(0);
    const [loadings, setLoading] = useState(true);

    const fetchdata = async () =>{
        try{
            const response = await fetch(`https://www.course-api.com/react-tabs-project`);
            const data = await response.json();
            setFetchJobs(data);
            setLoading(false);
        }
        catch(error){
            console.error("Could not fetch data",error);
        }
    }

    useEffect(()=>{
        fetchdata();
    },[])

    if (loadings){
        return (
            <section>
                <h1>Loading ....</h1>
            </section>
        )
    }
    
    // Destructure the array of objects in fetchJobs and the index of the object inorder to be 
    // able to retrieve data from it
    const {title, company, dates, duties} = fetchJobs[values]

    return (
        <section className="section">
            <div className="title">
            <h1>Experience</h1>
            <div className="underline"></div>
            </div>
            <div className="job-center">

                <aside className="company">
                    {/* map through the whole array to get the company name of each object */}
                    {fetchJobs.map((item, index) =>
                    <button  key={item.id} onClick={()=>setValues(index)} className={index===values&& "active-btn"}>
                        {item.company}
                    </button>)
                    }
                </aside>


                <article className="job-info">
                    <h2>{title}</h2>
                    <h4>{company}</h4>
                    <p className="date">{dates}</p>
                    {duties.map( (duty, index) => 
                        <div key={index} className="job-desc">
                            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                            <p>{duty}</p>
                       </div>
                       )
                    }
                </article>
            </div>
        </section>
    )
}