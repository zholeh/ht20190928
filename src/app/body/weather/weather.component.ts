import { Component, Input } from '@angular/core';
import { IWeather } from 'src/app/mock/mock';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  @Input()
  public weather: IWeather;
}
