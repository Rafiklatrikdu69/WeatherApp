import { bindable } from  "aurelia-framework";

export class IconeWeatherCardView {
  message: string;
@bindable img :string;
  constructor() {
    this.message = 'Hello world';
  }
}
