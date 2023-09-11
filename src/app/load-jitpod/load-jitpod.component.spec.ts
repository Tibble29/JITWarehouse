import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadJitpodComponent } from './load-jitpod.component';

describe('LoadJitpodComponent', () => {
  let component: LoadJitpodComponent;
  let fixture: ComponentFixture<LoadJitpodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadJitpodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadJitpodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
