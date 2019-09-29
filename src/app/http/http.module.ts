import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import ht1 from './ht1.json';

export interface IHomeTask1 {
  id: string;
  img: string;
  address: string;
  phone: number;
  weather: {
    title: string;
    icon: string;
    water: number;
    temperature: number;
  };
  social_info: {
    title: string;
    img: string;
    followers: number;
    following: number;
  };
  type: string;
}

export const homeTask1: IHomeTask1[] = ht1;

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class HttpModule {

  public static dataHomeTask1$: Observable<IHomeTask1[]>  =
    of(homeTask1).pipe(delay(200));
}
