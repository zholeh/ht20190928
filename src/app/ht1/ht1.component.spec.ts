import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ht1Component } from './ht1.component';

describe('Ht1Component', () => {
  let component: Ht1Component;
  let fixture: ComponentFixture<Ht1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ht1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ht1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
