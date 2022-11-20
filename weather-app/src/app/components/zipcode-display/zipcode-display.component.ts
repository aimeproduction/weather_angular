import {HttpErrorResponse} from '@angular/common/http';
import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {WeatherServiceService} from "../../service/weather-service.service";
import {CurrentWeather} from "../../models/current-weather";
import {zipcode} from "../../models/zipcode";


@Component({
  selector: 'app-zipcode-display',
  templateUrl: './zipcode-display.component.html',
  styleUrls: ['./zipcode-display.component.css']
})
export class ZipcodeDisplayComponent {
  form!: FormGroup;
  errorMessage = '';
  zipcode!: number;
  stockData!: CurrentWeather[];
  cloud_temp = 'Clouds';
  clear_temp = 'Clear';
  sunny_temp = 'Sunny';
  rain_temp = 'Rain';
  snow_temp = 'Snow'
  stockzipcode!: zipcode[];

  constructor(private service: WeatherServiceService) {
  }

  ngOnInit(): void {
    this.stockData = JSON.parse(<string>localStorage.getItem('currentWeather'));
    this.stockzipcode = JSON.parse(<string>localStorage.getItem('currentWeatherCode'));
    this.form = new FormGroup({
      zipCode: new FormControl('', [Validators.required])
    })
  }

  get_data() {
    this.zipcode = this.form.controls['zipCode'].value;
    this.service.get_current_weather(this.zipcode).subscribe({
      next: () => {
        this.stockData = JSON.parse(<string>localStorage.getItem('currentWeather'));
        this.errorMessage = '';
        const currentcode = JSON.parse(<string>localStorage.getItem("currentWeatherCode")) ?? [];
        currentcode.push(this.zipcode);
        localStorage.setItem("currentWeatherCode", JSON.stringify(currentcode));
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = "Sorry, it was impossible to load the data for the zipcode: " + this.zipcode;
      }
    });
    this.stockzipcode = JSON.parse(<string>localStorage.getItem('currentWeather'));
  }

  toggleElement(index: number) {
    this.stockData = this.service.deleteweatherData(index);
    this.stockzipcode = this.service.deletezipcode(index);
  }
}
