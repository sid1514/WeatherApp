import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  'cityWeather/fetchWeather',
  async (cityName) => {
    try {
      
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d19834f5dc35c33eb1aebda64ecd79a6`);
      return response.data;
    } catch (error) {
      throw Error(error.response?.data?.message || 'Failed to fetch weather data');
    }
  }
);

const initialState = {
  cityName: '',
  cityCountry:'',
  weatherData: null,
  loading: false,
  error: null
};

const cityWeatherSlice = createSlice({
  name: 'cityWeather',
  initialState,
  reducers: {
    setCityName: (state, action) => {
      state.cityName = action.payload;
    },
    setCountryName:(state,action)=>{
      state.cityCountry=action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCityName,setCountryName } = cityWeatherSlice.actions;

export default cityWeatherSlice.reducer;
