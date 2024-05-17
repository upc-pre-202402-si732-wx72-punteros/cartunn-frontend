import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifySuppliersComponent } from './notify-suppliers.component';

describe('NotifySuppliersComponent', () => {
  let component: NotifySuppliersComponent;
  let fixture: ComponentFixture<NotifySuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotifySuppliersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotifySuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
