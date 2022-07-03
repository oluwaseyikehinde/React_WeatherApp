import React from 'react';
import './App.css';
import History from './component/History';
import "weather-icons/css/weather-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './component/Weather';
import Graph from './Graph';
//import { Chart } from '@progress/kendo-react-charts';
import Form from './component/Form';
import axios from 'axios';

const API_key="d60c9988bdcb2245f32cf4789d74f326";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,
      response: [],
     
      timezone : undefined,
      country_code: undefined,
      
      data: [],
      startDate : "",
      endDate : "",
      country : ""
    };

    this.handlestartDate = this.handlestartDate.bind(this)
    this.handleendDate =this.handleendDate.bind(this)
    this.handlecountry =this.handlecountry.bind(this)
    this.gethistory = this.gethistory.bind(this)

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }

    };

    
  

  calCelsius(temp){
    let cels= Math.floor(temp - 273.15)
    return cels;
  }

  get_WeatherIcon(icons,rangeId){
    switch(true){
      case rangeId >= 200 && rangeId <= 232:
        this.setState({icon:this.weatherIcon.Thunderstorm});
      break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({icon:this.weatherIcon.Drizzle});
      break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({icon:this.weatherIcon.Rain});
      break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({icon:this.weatherIcon.Snow});
      break;
      case rangeId >= 700 && rangeId <= 781:
        this.setState({icon:this.weatherIcon.Atmmosphere});
      break;
      case rangeId === 800:
        this.setState({icon:this.weatherIcon.Clear});
      break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({icon:this.weatherIcon.Clouds});
      break;
      default:
        this.setState({icon:this.weatherIcon.Clouds});
    }
  }

 


getWeather = async(e) =>{

e.preventDefault();

const city = e.target.elements.city.value;
const country = e.target.elements.country.value;

if(city && country){
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);

  
  const response = await api_call.json();

  this.setState({
    city: `${response.name}, ${response.sys.country}`,
    celsius: this.calCelsius(response.main.temp),
    temp_max: this.calCelsius(response.main.temp_max),
    temp_mmin: this.calCelsius(response.main.temp_min),
    description: response.weather[0].description,
    error: false
  });

  this.get_WeatherIcon(this.weatherIcon,response.weather[0].id);

  console.log(response);

}else {
  this.setState({
    error: true
  });
}
};

handlestartDate(value){
  this.setState({startDate : value})
}

 handleendDate(value){
  this.setState({endDate : value})
}

 handlecountry(value){
  this.setState({country : value})
}


gethistory(){
console.log(this.state.startDate, this.state.endDate, this.state.country)
const api_key = "fc6af37b95b541a28ce4b628509f89f9";
const postalcode = 27601
console.log(api_key)
console.log(postalcode)
 try{
  // const call_api = await fetch(`https://api.weatherbit.io/v2.0/history/daily?postal_code=${postalcode}&country=${this.state.country}&start_date=${this.state.startDate}&end_date=${this.state.endDate}&key=${api_key}`)
 
   const apiUrl = `https://cors-anywhere.herokuapp.com/api.weatherbit.io/v2.0/history/daily?postal_code=${postalcode}&country=${this.state.country}&start_date=${this.state.startDate}&end_date=${this.state.endDate}&key=${api_key}`;
   console.log(apiUrl)
   
   axios({ method: 'get', url:apiUrl }) 
   .then(function ({data}) { console.log('Success ' + JSON.stringify(data)) }) 
   .catch(function (error) { console.log('Error ' + error.message) })
   

   // axios.get(apiUrl)
   //   .then((response) => response.data)
   //   .then((data) => console.log('This is your data', data));
  
  // const response =  call_api.json();
 //  console.log(call_api)
   // this.setState({
   //   data: response
   // });
   
  // console.log(response);
 
 }
 catch(e){
   console.log(e);
 }
 // 
};


  render(){
    return(
     
      <div className="App d-flex row justify-content-center">
      
      <div className="bg-inf0 bg-gradient col-md-3">
        <Form loadweather={this.getWeather} error={this.state.error}/>
          <Weather
            city={this.state.city} 
            country={this.state.country}
            temp_celsius={this.state.celsius}
            temp_max={this.state.temp_max}
            temp_min={this.state.temp_min}
            description={this.state.description}
            weatherIcon={this.state.icon}
            />
      
          </div>
    
          <div className="col-md-5">
          <History
          onsubmit = {this.gethistory}  
          setState = {this.setState}
          data = {this.state.data}
          startDate = {this.state.data.startDate}
          endDate = {this.state.data.endDate}
          country = {this.state.data.country}
          handlestartDate = {this.handlestartDate}
          handleendDate = {this.handleendDate}
          handlecountry = {this.handlecountry}
          />
          </div>

          <div className="badge bg-dark bg-gradient bg-transparent  col-md-4">
          <Graph/>
          </div>
      </div>

   
      
    );
  }
}


export default App;
