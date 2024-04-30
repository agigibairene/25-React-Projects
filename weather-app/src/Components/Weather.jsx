import { useState} from "react";
import searchLogo from "../assets/images/search.png";
import "./style.css";


const ImageSources = {
    Clouds: "src/assets/images/clouds.png",
    wind: "src/assets/images/wind.png",
    humidity: "src/assets/images/humidity.png",
    mist: "src/assets/images/mist.png",
    Rain: "src/assets/images/rain.png",
    Snow: "src/assets/images/snow.png",
    Drizzle: "src/assets/images/drizzle.png",
    Clear: "src/assets/images/clear.png"
}

export default function Weather(){
    const [weatherInfo, setWeatherInfo] = useState();
    const [cityName, setCityName] = useState("");
    const [displayDetails, setDisplayDetails] = useState()

    const fetchData = async () =>{
        try{
            const apiKey = "9ae843ea58ffd908e97b77d2d99a070f";
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`)
            const data = await response.json()
            console.log(data)
            setWeatherInfo(data)
        }
        catch (error) {
            console.error("Couldn't fetch data", error)
        }
    }

    // useEffect(() => {
    //     fetchData()
    // }, [cityName])

    return (
        <div className="container">
            <div className="head">
            <input value={cityName} placeholder="enter city name" onChange={(e) =>setCityName(e.target.value)}/>
            <button onClick={()=> {setDisplayDetails(true); fetchData()}}><img src={searchLogo} /></button>
            </div>

            { weatherInfo && <div className={displayDetails ? "weather" : "hidden"}>
                <img src={ImageSources[weatherInfo?.weather[0].main]} className="weather-icon"/>
                <h1  className="temperature">{weatherInfo?.main.temp}°C</h1>
                <h2 className="city">{weatherInfo?.name}</h2>
                <div className="details">
                    <div className="humidity">
                        <img src={ImageSources.humidity}/>
                        <div>
                            <p className="hum-value">{weatherInfo?.main.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>

                    <div className="wind">
                        <img src={ImageSources.wind}/>
                        <div>
                        <p className="wind-value">{weatherInfo?.wind.speed}km/h</p>
                        <p>Wind</p>
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    )
}