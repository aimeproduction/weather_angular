import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ZipcodeDisplayComponent} from "./components/zipcode-display/zipcode-display.component";
import {FiveDayForecastComponent} from "./components/five-day-forecast/five-day-forecast.component";

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
  {
    path: 'five-day-forecast',
    component: FiveDayForecastComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
