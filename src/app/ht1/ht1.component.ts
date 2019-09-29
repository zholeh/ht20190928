import { Component, OnInit, OnDestroy } from '@angular/core';
import { IHomeTask1, HttpModule } from '../http/http.module';
import { Observable, ReplaySubject } from 'rxjs';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { EventEmitter } from 'events';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-ht1',
  templateUrl: './ht1.component.html',
  styleUrls: ['./ht1.component.css']
})
export class Ht1Component implements OnInit, OnDestroy {
  constructor() {
    this.data$ = HttpModule.dataHomeTask1$;
  }
  private data$: Observable<IHomeTask1[]>;
  public data: IHomeTask1[] | undefined;
  public currentItem = 0;
  public paginationLength = 0;
  public cartHeaders = ['Hotel', 'Fishing', 'Tour', 'Weather'];
  private destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  ngOnInit() {
    this.data$.pipe(takeUntil(this.destroy)).subscribe(res => {
      this.data = res;
      this.paginationLength = res.length;
    });
  }
  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
  public changePage(event: any) {
    this.currentItem = event.pageIndex;
  }
}
