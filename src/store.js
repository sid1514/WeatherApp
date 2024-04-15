import { configureStore } from "@reduxjs/toolkit";

import cityWeatherReducer from "./components/cities/cityState/citySlice"

export default configureStore({
    reducer: {
        cityWeather: cityWeatherReducer,
       
}

})