import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IApartment } from 'src/app/mock/mock';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent implements OnInit {
  public appartementsType: string[] = [];
  @Input()
  public appartements: IApartment[];
  @Output()
  public onCurrentItemChange: EventEmitter<number> = new EventEmitter();
  public onClick(index: number): void {
    this.onCurrentItemChange.emit(index);
  }
  public ngOnInit(): void {
    this.appartementsType = ['Hotel', 'Fishing', 'Tour', 'Weather'];
  }
}
