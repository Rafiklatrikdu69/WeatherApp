import { bindable } from  "aurelia-framework";
export class TemperatureCard {
  @bindable temp: number;

attached() {
  this.temp = Math.round(this.temp)
}
  constructor() {

  }
}
