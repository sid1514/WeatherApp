
import { useEffect ,useState} from "react";
import axios from 'axios';
import './citites.css';
import { useDispatch } from "react-redux";
import { setCityName, setCountryName } from "./cityState/citySlice";
import { useNavigate } from "react-router-dom";
const CityDisplay=()=>{
    const [searchCity,setSearchCity]=useState('')
    const [cities,setCitites]=useState([])
    const dispatch=useDispatch()
    const nav=useNavigate()
    useEffect(()=>{
        axios.get("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=200&refine=timezone%3A%22Asia%2FKolkata%22")
        .then((data)=>setCitites(data.data.results))
        .catch((e)=>console.log(e))  
    },[])
    
    console.log(cities)
    const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchCity.toLowerCase())
  );

  const handleCityweather=(cityname,country)=>{
    console.log(cityname)
    dispatch(setCityName(cityname));
    dispatch(setCountryName(country))
   nav('/weatherCity')
    }

    const handleCityweather2 = (cityname,country, event) => {
        if (event.button === 2) { 
            const newTabUrl = `/weatherCity?city=${cityname}&country=${country}`; 
            window.open(newTabUrl, '_blank');
        }
      };
    return(<>
    <section className="w-full bg-gradient-to-r from-yellow-500/75 to-purple-500 h-fit text-center">
        <h1 className="text-4xl font-bold drop-shadow-lg text-white pt-10 pb-5">CITY WEATHER</h1>
        <input type="search" placeholder="search city" className="m-5 w-3/12 p-2 rounded-xl relative"  onChange={(e)=>setSearchCity(e.target.value)} />
        <button className="shadow-lg text-white border p-2 rounded border-dotted hover:bg-white hover:text-blue-500" >Search</button>
        <div className="text-center absolute inset-x-1/3 w-full"> 
            {
                searchCity?
                filteredCities.map((c, index) => (
                <div key={index} className="ml-12 mr-3 h-1/2 text-center ">
                    <tr className="align-centre content-centre bg-white text-black" onClick={()=>handleCityweather(c.name)} >
                        <td >{c.name}</td>
                    </tr>
                    </div>)) :null
            }
        </div>
        <section className=" h-lvh text-centre w-fit overflow-y-auto text-center">

            <table className="ml-56 mt-4 w-fit justify-center  ">
                <div className="ml-6 pl-6 headers_city bg-black text-white">
                <th>index</th>  <th>Name</th> <th>Coutry</th> <th>Timezone</th> <th>Population</th> <th>alternate names</th>
                </div>
                {cities.map((c, index) => (
            <div key={index} className="ml-12 mr-3 w-fit h-1/2">
            
            <tr className={index%2==0?"align-centre content-centre bg-blue-500/25 text-white":"align-centre content-centre bg-blue-500/50 text-white "} onClick={()=>handleCityweather(c.name,c.cou_name_en)} onMouseDown={(e) => handleCityweather2(c.name,c.cou_name_en, e)} 
        onContextMenu={(e) => e.preventDefault()}>
                <td>{index}</td>
                <td>{c.name}</td>
                <td>{c.cou_name_en}</td>
                <td>{c.timezone}</td>
                <td>{c.population}</td>
                <td>{Array.isArray(c.alternate_names)? c.alternate_names.slice(0, 3).join(', '): c.alternate_names}</td>
            </tr>
  </div>
))}
            </table>
        </section>

</section>
    </>)
}

export default CityDisplay;