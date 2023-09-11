import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanGoodsOutComponent } from './scan-goods-out.component';

describe('ScanGoodsOutComponent', () => {
  let component: ScanGoodsOutComponent;
  let fixture: ComponentFixture<ScanGoodsOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanGoodsOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanGoodsOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
