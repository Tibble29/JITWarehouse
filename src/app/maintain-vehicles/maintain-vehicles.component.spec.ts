import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainVehiclesComponent } from './maintain-vehicles.component';

describe('MaintainVehiclesComponent', () => {
  let component: MaintainVehiclesComponent;
  let fixture: ComponentFixture<MaintainVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintainVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintainVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
