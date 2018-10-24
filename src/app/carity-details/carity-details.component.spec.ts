import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarityDetailsComponent } from './carity-details.component';

describe('CarityDetailsComponent', () => {
  let component: CarityDetailsComponent;
  let fixture: ComponentFixture<CarityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
