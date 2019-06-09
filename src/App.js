import React, { Component } from 'react';
import Form from './components/form.js';
import Weather from './components/weather.js';
import './App.css';
import Chart from './components/Chart.js'
const API_KEY="eeb27b4fdf84539b6127f35cd394d622";
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      temperature:'',
      tempMax:'',
      tempMin:'',
      humidity:'',
      pressure:'',
      city:'',
      country:'',
      description:'',
      error:'',
      charData:{},
      arrayy:{}
    }
  }
  getWeather= async (e)=>{
    e.preventDefault()
  const city=e.target.elements.city.value;
  const country=e.target.elements.country.value;
  const api=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
  const data1= await api.json();  
  console.log(data1.main)
  if(city && country){
  this.setState({
    arrayy:data1.main,
    temperature:data1.main.temp,
    tempMax:data1.main.temp_max,
    tempMin:data1.main.temp_min,
    humidity:data1.main.humidity,
    pressure:data1.main.pressure,
    city:data1.name,
    country:data1.sys.country,
    description:data1.weather[0].description,
    error:''
  })}
  
  else{
    this.setState({
      temperature:'',
      tempMax:'',
      tempMin:'',
      humidity:'',
      pressure:'',
      city:'',
      country:'',
      description:'',
      error:'Please Enter Data'
    })
  }
  console.log(this.state.arrayy)
}
componentShouldUpdate(){
this.getChartData();
}
getChartData(){
  this.setState({
    chartData:{
      labels: ['Temperature','Maximum Temperature','Minimu Temperatue','Humidity','Pressur'],
      datasets:[
        {
          label:'Weather',
      data:this.state.arrayy,
      backgroundColor:[
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ]
    }
  ]

  }})
}

  
  render() { 
    return ( 
      <div className="Wrapper">
        <div className="form-container">
        <div className="div1">
      <Form getWeather={this.getWeather}/>
      <Weather
      temperature={this.state.temperature}
      tempMax={this.state.tempMax}
      tempMin={this.state.tempMin}
      humidity={this.state.humidity}
      pressure={this.state.pressure}
      city={this.state.city}
      country={this.state.country}
      description={this.state.description}
      error={this.state.error}/>
      </div>
      <div className="div2">
      <Chart ChartData={this.state.chartData} Location="Massachusetts" legendPosition="bottom"/>
      </div>
      </div>
      </div>
     );
  }
}
 
export default App;