import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeather } from "../cities/cityState/citySlice";
import WeatherCard from "./weatherdetailCard";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
const WeatherCity=()=>{
    const cityName = useSelector(state => state.cityWeather.cityName);
    const countryName=useSelector(state=>state.cityWeather.cityCountry);
    const location=useLocation()
    const cityName2 = new URLSearchParams(location.search).get("city");
    const countryName2=new URLSearchParams(location.search).get("country");
    const dispatch = useDispatch();
    const weatherData = useSelector((state) => state.cityWeather.weatherData);
  const loading = useSelector((state) => state.cityWeather.loading);
  const error = useSelector((state) => state.cityWeather.error);
  useEffect(() => {
    if (cityName) {
      dispatch(fetchWeather(cityName));
    }else{
        dispatch(fetchWeather(cityName2));
    }
  }, [dispatch, cityName]);

 
 console.log(weatherData)
  return (
    <section className="p-10 text-center bg-gradient-to-r from-cyan-500 to-blue-900 h-screen custom-size-weather">
            <div>

                <h1 className="text-5xl text-amber-200 drop-shadow-lg custom-head">Weather Today</h1>
            </div>
        <div className="custom-weather-inner md:flex m-36 p-10 text-center md:space-x-20 bg-grey-400/25 text-white shadow-lg  rounded-2xl custom-weather-detail">
            <div className="w-1/2"> 
                <h1 className="text-3xl ">{cityName?cityName:cityName2} </h1>
                <h4>{countryName?countryName:countryName2}</h4>
            </div>
            <div>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {weatherData && (
                    <div>
         
          
          <WeatherCard temperature={weatherData.main.temp} temperatureMin={weatherData.main.feels_like} humidity={weatherData.main.humidity} wind={weatherData.wind.speed} weatherDescription={weatherData.weather[0].description}/>
        </div>
      )}
    </div>
    </div>
    </section>
  );
};


export default WeatherCity;