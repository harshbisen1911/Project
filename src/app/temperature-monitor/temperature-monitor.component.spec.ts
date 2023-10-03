import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureMonitorComponent } from './temperature-monitor.component';

describe('TemperatureMonitorComponent', () => {
  let component: TemperatureMonitorComponent;
  let fixture: ComponentFixture<TemperatureMonitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureMonitorComponent]
    });
    fixture = TestBed.createComponent(TemperatureMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
