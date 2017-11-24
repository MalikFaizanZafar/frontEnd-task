import { Component } from '@angular/core';
import {WeatherService} from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public weatherService : WeatherService){
    weatherService.getWeatherInfo().subscribe(result=>{
      console.log("Working");
      console.log(result);
    },err=>{
      console.log("Not Working");
      console.log(err);
    });
  }
}
