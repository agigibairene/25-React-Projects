import { useEffect, useState } from "react"
import "./style.css"

export default function Tours(){

    const [fetchedData, setFetchData] = useState();
    const [readMore, setReadMore] = useState(false);
    
    const FetchData = async () => {
        try{
            const response = await fetch(`https://course-api.com/react-tours-project`);
            const data = await response.json();
            console.log(data);
            setFetchData(data);
        }
        catch (error) {
            console.log("Failed to fetch data" ,error);
        }
    }

    useEffect(()=>{
        FetchData()
    }, [])


    const toggleReadMore = (index) => {
        setReadMore(prevState => {
            const newList = [...prevState];
            newList[index] = !newList[index];
            return newList;
        });
    }

    return (
        <div className="wrapper">
            {/* <h2>Our Tours</h2> */}
            {
                fetchedData && fetchedData.map(tour => <div key={tour.id} className="tour-div">
                    <div >
                       <img src={tour.image} alt={tour.name}/>
                       <p className="price">${tour.price}</p>
                       <div className="text">
                            <h3>{tour.name}</h3>
                            <p>
                                {readMore ? tour.info : `${tour.info.substring(0, 200)}`}
                                <button className="read" onClick={()=>setReadMore(read => !read)}>{readMore ? "show less" : "read more..."}</button>
                            </p>
                            <button  className="btn" onClick={() => toggleReadMore(tour.id)}>Not interested</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}