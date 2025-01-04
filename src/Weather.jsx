import { useState } from "react"
import axios from "axios"

function Weather(){

const [city,setcity] = useState("")

const handlecity = (event) => {
    setcity(event.target.value)
}

const getweather = () => {
    
    var weatherdata = axios("https://api.openweathermap.org/data/2.5/weather?q={america}&appid=366b65bc8c93cc3d6e35b2b8b5f96316")

    weatherdata.then(function(success){
        console.log(success.data)
    })

}

return(
    <div className="bg-black p-20">
        <div className="bg-yellow-300 p-10 rounded-md">
            <h1 className="text-2xl font-bold">Weather Report</h1>
            <p>I can give you a weather report about your city !</p>
            <input className="mt-2 border border-black rounded-sm p-1" onChange={handlecity}></input> <br/>
            <button onClick={getweather} className="bg-black text-white p-2 rounded-md mt-2">Get Report</button>
            <div className="mt-3">
                <p>Weather :</p>
                <p>Temperature :</p>
                <p>Decription :</p>
            </div>
        </div>
    </div>
)

}

export default Weather