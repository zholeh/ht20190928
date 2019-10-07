import { Component } from '@angular/core';
import { MockData } from '../mock/mock';
import { Observable } from 'rxjs';
import { IApartment } from '../mock/mock';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  public apartments$: Observable<IApartment[]> = MockData.apartments$;
  public currentItem: number = 0;
}
