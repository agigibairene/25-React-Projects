import { useEffect, useState } from "react"
import "./style.css"

export default function Tours(){

    const [fetchedData, setFetchData] = useState();
    const [readMore, setReadMore] = useState();
    const [selectedId, setSelectedId] = useState(null);
    const [deleted, setDeleted] = useState(null);

    function handleSelection(id){
        setSelectedId(selectedId === id ? null : id)
    }

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

console.log(selectedId)


    return (
        <div className="wrapper">
            {/* <h2>Our Tours</h2> */}
            {
                fetchedData && fetchedData.filter(item => item.id !== deleted ).map((tour) => <div key={tour.id} className="tour-div">
                    <div >
                       <img src={tour.image} alt={tour.name}/>
                       <p className="price">${tour.price}</p>
                       <div className="text">
                            <h3>{tour.name}</h3>
                            <p>
                                {selectedId===tour.id && readMore ? tour.info : `${tour.info.substring(0, 200)}`}
                                <button className="read" onClick={()=>{handleSelection(tour.id); setReadMore(selectedId === tour.id ? false : true) }}>{selectedId === tour.id && readMore ? "show less" : "read more..."}</button>
                            </p>
                            <button  className="btn" onClick={()=>setDeleted(tour.id)}>Not interested</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}