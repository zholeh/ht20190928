import { Component, Input, OnInit } from '@angular/core';
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
  public ngOnInit(): void {
    this.appartementsType = ['Hotel', 'Fishing', 'Tour', 'Weather'];
  }
}
