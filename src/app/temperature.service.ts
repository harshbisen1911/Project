import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  public temperatureChangeEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  startMonitoringTemperature(): void {
    setInterval(() => {
      const temperature = this.generateRandomTemperature();
      if (temperature > 30) {
        this.temperatureChangeEvent.emit(temperature);
      }
    }, 1000);
  }

  private generateRandomTemperature(): number {
    const min = 10;
    const max = 40;
    return Math.floor(Math.random() * (max - min)) + min;
  }
}