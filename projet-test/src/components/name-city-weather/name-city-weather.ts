import { bindable } from "aurelia-framework";
import { WeatherResponse } from "entity/WeatherResponse";
export class NameCityWeather {
  message: string;
  @bindable weather : string;
  constructor() {
    this.message = 'Hello sadasdworld';
  }
}
