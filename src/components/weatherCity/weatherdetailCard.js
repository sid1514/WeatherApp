const WeatherCard=({temperature,wind,temperatureMin,humidity,weatherDescription})=>{
    return(<>
    <section className=" ">
        <div className="mt-5 flex space-x-8 bg-grey-400/25 text-white custom-temp-wind">
            <div>
                <h2 className="text-amber-300 font-bold weather-headings">Temperature</h2>
                <h3 className="weather-headings">{temperature}C max</h3>
                <h3 className="weather-headings">{temperatureMin}C min</h3> 
            </div>  
        <img src="temp.png" className="w-1/12 h-1/12 custom-img-size"/>
          
            <div className="flex ">
                <div>
                    <h2 className="text-cyan-300 font-bold weather-headings">Humidity</h2>
                    <h3 className="weather-headings">{humidity}%</h3>
                </div>
                <img src="humid.png" className="w-1/12 h-1/12 ml-10 humid-img"/>
            </div>
              
            
        </div>
     <div className="flex space-x-10 mt-10 w-1/2">
                
        <div className=" weather-headings flex ">
            <div className=" ">
            <h2 className="text-blue-400 font-bold ">Wind</h2>
            <h3 className="">{wind}km/hr</h3>
            </div>
            <img src="wind.png" className="ml-5 w-1/6 h-1/12 wind-img"/>
        </div>
        <div className="weather-headings">
            <h3 className="text-black font-bold ">Description</h3>
            {weatherDescription}
        </div>
    </div>   
    </section>
    </>)
}

export default WeatherCard;