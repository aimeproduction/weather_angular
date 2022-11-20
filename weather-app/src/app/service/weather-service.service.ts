import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {CurrentWeather} from "../models/current-weather";

export interface zipcode{
  code: number;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
Baseurl = 'https://api.openweathermap.org/data/2.5/weather?zip='
  api_key: string = '5a4b2d457ecbef9eb2a71e480b947604';
  data_api: CurrentWeather[]=[];
  constructor(private  http: HttpClient) { }

  get_current_weather(zipcode: number): Observable<CurrentWeather>{
    const currentcode = JSON.parse(<string>localStorage.getItem("currentWeatherCode")) ?? [];
    currentcode.push(zipcode);
    localStorage.setItem("currentWeatherCode", JSON.stringify(currentcode));
    return this.http.get<CurrentWeather>(this.Baseurl+zipcode+',us&appid='+ this.api_key).pipe(
      tap((res: any) => {
        const current = JSON.parse(<string>localStorage.getItem("currentWeather")) ?? [];
        current.push(res);
        localStorage.setItem("currentWeather", JSON.stringify(current));
        console.log(current)
      }))
  }

  deleteweatherData(index: number): CurrentWeather [] {
    const currentDataWeather = JSON.parse(<string>localStorage.getItem("currentWeather")) as CurrentWeather [];
    currentDataWeather.splice(index, 1);
    localStorage.setItem("currentWeather", JSON.stringify(currentDataWeather));
    return currentDataWeather;
  }

  deletezipcode(index: number): zipcode [] {
    const currentzipcode = JSON.parse(<string>localStorage.getItem("currentWeatherCode")) as zipcode [];
    currentzipcode.splice(index, 1);
    localStorage.setItem("currentWeatherCode", JSON.stringify(currentzipcode));
    return currentzipcode;
  }
}
