import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {CurrentWeather} from "../models/current-weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
Baseurl = 'https://api.openweathermap.org/data/2.5/weather?zip='
  api_key: string = '5a4b2d457ecbef9eb2a71e480b947604';
  data_api: CurrentWeather[]=[];
  constructor(private  http: HttpClient) { }

  get_current_weather(zipcode: number): Observable<CurrentWeather>{
    return this.http.get<CurrentWeather>(this.Baseurl+zipcode+',us&appid='+ this.api_key).pipe(
      tap((res: any) => {
        this.data_api =res;
       console.log(this.data_api)
        }))

  }
}
