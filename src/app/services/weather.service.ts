import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private http : Http) { }

  getWeatherInfo(){
      return this.http.get('https://www.metaweather.com/api/location/search/?query=london').map(res=>res.json());
  }

}
