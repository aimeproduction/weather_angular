import { Component } from '@angular/core';
import {WeatherServiceService} from "../../service/weather-service.service";
import {FiveDayForecast} from "../../models/five-day-forecast";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  cloud_temp = 'Clouds';
  clear_temp = 'Clear';
  sunny_temp = 'Sunny';
  rain_temp = 'Rain';
  snow_temp = 'Snow'
  stockLon!: number[];
  stockLat!: number[];
  dataForecast!: FiveDayForecast;
  constructor(private service: WeatherServiceService) {
  }
  ngOnInit(){
   this.getForecast();
  }
  getForecast(){

    this.stockLon = JSON.parse(<string>localStorage.getItem('lon'));
    this.stockLat = JSON.parse(<string>localStorage.getItem('lat'));
    this.service.getFiveDayForecast(this.stockLat[this.service.positionIndex],
      this.stockLon[this.service.positionIndex]).subscribe(data =>{
        this.dataForecast = data;
        console.log(this.dataForecast)
    })

  }
}
