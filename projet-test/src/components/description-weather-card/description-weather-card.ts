import { bindable } from  "aurelia-framework";
export class DescriptionWeatherCard {
  message: string;
  @bindable description: string;
  constructor() {
    this.message = 'Hello world';
  }
}
