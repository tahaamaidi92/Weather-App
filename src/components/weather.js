import React from 'react';
import '../App.css';
const Weather =(props)=> {
        return ( 
            <div className="info">
              {
                props.city && <p className="info-key">City: 
                <span className="info-value"> {props.city}</span> 
                </p>
              }
              {
                props.country && <p className="info-key">Country: 
                <span className="info-value"> {props.country}</span>
                 </p>
              }
              {
                props.temperature && <p className="info-key"> Temperatue: 
                <span className="info-value"> {props.temperature-273.15}</span>
                 </p> 
              }
              {
                props.tempMax && <p className="info-key"> MaximuTemperatue: 
                <span className="info-value">{props.tempMax-273.15} </span> 
                 </p>
              }
              {
                props.tempMin && <p className="info-key"> MinimumTemperature:
                <span className="info-value"> {props.tempMin-273.15} </span>
                 </p>
              }
              {
                props.humidity && <p className="info-key">Humidity:
                <span className="info-value"> {props.humidity} </span>
                </p>
              }
              {
                props.pressure &&  <p className="info-key">Pressure:
                <span className="info-value">{props.pressure}</span> 
                 </p> 
              }
              {
                props.description &&  <p className="info-key"> Description: 
                <span className="info-value">{props.description} </span>
                 </p>
              }
               {
                props.error &&  <p className="info-key"> Error: 
                <span className="info-value">{props.error} </span> </p>
              }
            </div>
         );
    }
 
export default Weather;