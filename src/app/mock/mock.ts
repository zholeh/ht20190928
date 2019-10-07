import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import apartments from './apartments.json';

export interface ISocialInfo {
  title: string;
  img: string;
  followers: number;
  following: number;
}

export interface IWeather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

export interface IApartment {
  id: string;
  img: string;
  address: string;
  phone: number;
  weather: IWeather;
  social_info: ISocialInfo;
  type: string;
}

export class MockData {
  public static apartments$: Observable<IApartment[]> = of(apartments).pipe(delay(200));
}
