import { useContext, useEffect, useState } from "react";
import "./style.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { DarkTheme } from "./ThemeContext";

export default function Tabs(){
    const [ID, setId] = useState(0);
    const [fetchData, setFetchData] = useState([]);
    const [loadings, setLoadings] = useState(true);
    const {theme, toggle} = useContext(DarkTheme)
    
    const fetchInfo = async () =>{
        try {
            const response = await fetch(`https://www.course-api.com/react-tabs-project`);
            const data = await response.json();
            setFetchData(data);
            console.log(data);
            setLoadings(false);
            
        }
        catch (error){
            console.error(`Could not fetch data`,error);
            setLoadings(true);
        }
    }

   

    useEffect(()=>{
        fetchInfo();
    },[])

    if (loadings){
        <div>Loading....</div>
    }
    if (!fetchData.length) {
        return <div>No data available</div>;
    }


    const {title, dates, duties, company} = fetchData[ID];
    

    return (
        <section className={`section ${theme}`}>
            <div className="container">
            <h1>Experience</h1>
                <div className="Underline"></div>
            <button className="toggle" onClick={toggle}>{theme === "dark" ? "Light Mode" : "Dark mode"}</button>
            <div className="data">

             <article className="tabs">
                {
                    fetchData.map((item, index) =><button key={index} onClick={()=>setId(index)} className={`company-name ${theme}`}>
                        {item.company}
                    </button>)
                }
                </article>
                <article>
                    <h2>{title}</h2>
                    <button className="company">{company}</button>
                    <p className="date">{dates}</p>
                    {
                        duties.map((duty, index) =><div key={index} className="duty">
                            <FaAngleDoubleRight className="icon"/>
                            <p>{duty}</p>
                        </div>)
                    }
                </article>
            </div>
            </div>
        </section>
    )
}