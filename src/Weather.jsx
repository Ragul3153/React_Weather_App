import { useState } from "react"
import axios from "axios"

function Weather(){

const [city,setcity] = useState("")

const [weather,setweather] = useState("")
const [temp,settemp] = useState("")
const [descr,setdescr] = useState("")

const handlecity = (event) => {
    setcity(event.target.value)
}

const getweather = () => {
    
    var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=366b65bc8c93cc3d6e35b2b8b5f96316`)

    weatherdata.then(function(success){
        console.log(success.data)
        setweather(success.data.weather[0].main)
        settemp(success.data.main.temp)
        setdescr(success.data.weather[0].description)
    })

}

return(
    <div className="bg-black p-5 md:p-14 ">
        <div className="bg-weatherbg bg-cover p-10 rounded-md">
            <h1 className="text-2xl font-bold text-white">Weather Report</h1>
            <p className="text-white">I can give you a weather report about your city !</p>
            <input className="mt-2 border border-black rounded-sm p-1 w-40"  onChange={handlecity}></input> <br/>
            <button onClick={getweather} className="bg-black text-white p-2 rounded-md mt-2">Get Report</button>
            <div className="mt-3">
                <p className="text-white font-bold">Weather : {weather} </p>
                <p className="text-white font-bold">Temperature : {temp} </p>
                <p className="text-white font-bold">Description : {descr} </p>
            </div>
        </div>
    </div>
)

}

export default Weather