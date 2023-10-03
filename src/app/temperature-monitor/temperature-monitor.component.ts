import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../temperature.service';

@Component({
  selector: 'app-temperature-monitor',
  templateUrl: './temperature-monitor.component.html',
  styleUrls: ['./temperature-monitor.component.css']
})
export class TemperatureMonitorComponent implements OnInit {
  public currentTemperature!: number;

  constructor(private temperatureService: TemperatureService) {}

  ngOnInit(): void {
    this.temperatureService.startMonitoringTemperature();

    this.temperatureService.temperatureChangeEvent.subscribe((temperature: number) => {
      this.currentTemperature = temperature;
    });
  }
}