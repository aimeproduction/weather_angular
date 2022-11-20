import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ZipcodeDisplayComponent} from "./components/zipcode-display/zipcode-display.component";
import {FiveDayForecastComponent} from "./components/five-day-forecast/five-day-forecast.component";
import {ForecastComponent} from "./components/forecast/forecast.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'zipcode-display',
    pathMatch: 'full'
  },
  {
    path: 'zipcode-display',
    component: ZipcodeDisplayComponent
  },
  { path: 'forecast/:zipcode',
    component: ForecastComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
