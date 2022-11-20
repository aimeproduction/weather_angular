import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {WeatherServiceService} from "../../service/weather-service.service";

@Component({
  selector: 'app-zipcode-display',
  templateUrl: './zipcode-display.component.html',
  styleUrls: ['./zipcode-display.component.css']
})
export class ZipcodeDisplayComponent {
  form!: FormGroup;
  errorMessage ='';
  data: any;
  array_data: any;
  zipcode!: number;
  constructor(private fb: FormBuilder, private service: WeatherServiceService) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      zipCode: new FormControl('', [Validators.required])
    })
  }
  get_data(){
    this.zipcode = this.form.controls['zipCode'].value;
    this.service.get_current_weather(this.zipcode).subscribe();
  }
}
