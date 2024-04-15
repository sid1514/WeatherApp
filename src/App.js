import CityDisplay from "./components/cities/citiesDisplay";
import { Route,Routes } from "react-router-dom";
import WeatherCity from "./components/weatherCity/weatherCity";
function App() {
  return (
    <div className="">
       <Routes>
       <Route path="/" element={ <CityDisplay />} />
    <Route path="/weatherCity" element={ <WeatherCity />} />
    </Routes>
   
    </div>
  );
}

export default App;
