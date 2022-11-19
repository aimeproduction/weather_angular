import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from "@angular/material/button";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZipcodeDisplayComponent } from './components/zipcode-display/zipcode-display.component';
import { FiveDayForecastComponent } from './components/five-day-forecast/five-day-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeDisplayComponent,
    FiveDayForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
