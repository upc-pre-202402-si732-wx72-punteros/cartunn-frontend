import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersObservationComponent } from './orders-observation.component';

describe('OrdersObservationComponent', () => {
  let component: OrdersObservationComponent;
  let fixture: ComponentFixture<OrdersObservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersObservationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
