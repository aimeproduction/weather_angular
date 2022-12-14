import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {CurrentWeather} from "../models/current-weather";
import {zipcode} from "../models/zipcode";
import {FiveDayForecast} from "../models/five-day-forecast";



@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  positionIndex!: number;
  lon!: number;
  lat!: number;
  Baseurl = 'https://api.openweathermap.org/data/2.5/weather?zip='
  api_key: string = '5a4b2d457ecbef9eb2a71e480b947604';
  data_api: CurrentWeather[] = [];

  constructor(private http: HttpClient) {
  }

  get_current_weather(zipcode: number): Observable<CurrentWeather> {
    return this.http.get<CurrentWeather>(this.Baseurl + zipcode + ',us&appid=' + this.api_key).pipe(
      tap(res => {
        console.log(res)
        const current = JSON.parse(<string>localStorage.getItem("currentWeather")) ?? [];
        current.push(res);
        localStorage.setItem("currentWeather", JSON.stringify(current));
        console.log(current)
      }))
  }

getFiveDayForecast(lat: number, lon: number): Observable<FiveDayForecast>{
    return this.http.get<FiveDayForecast>('https://api.openweathermap.org/data/2.5/forecast/daily?lat='+lat + '&lon='+lon+'&&cnt3=&appid='+this.api_key);
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
    this.deleteLat(index);
    this.deleteLon(index);
    return currentzipcode;

  }

  deleteLat(index: number): number [] {
    const currentlat = JSON.parse(<string>localStorage.getItem("lat")) as number [];
    currentlat.splice(index, 1);
    localStorage.setItem("lat", JSON.stringify(currentlat));
    return currentlat;
  }

  deleteLon(index: number): number [] {
    const currentlon = JSON.parse(<string>localStorage.getItem("lon")) as number [];
    currentlon.splice(index, 1);
    localStorage.setItem("lon", JSON.stringify(currentlon));
    return currentlon;
  }
}
