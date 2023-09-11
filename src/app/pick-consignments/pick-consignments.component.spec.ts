import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickConsignmentsComponent } from './pick-consignments.component';

describe('PickConsignmentsComponent', () => {
  let component: PickConsignmentsComponent;
  let fixture: ComponentFixture<PickConsignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickConsignmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickConsignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
