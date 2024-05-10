import { HttpClient } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';
import { ObserverLocator } from 'aurelia-binding';
import { WeatherResponse } from 'entity/WeatherResponse';
@autoinject
export class WeatherCardView {
  message: string;
  donneesApi: WeatherResponse;
  subscription: any;

  constructor(private httpClient: HttpClient, private observerLocator: ObserverLocator) {
  }

  attached() {
    this.fetchData();
  }


  fetchData() {
    this.httpClient.fetch('https://api.openweathermap.org/data/2.5/weather?appid=e3b787e83e7b983adeca31847414a20e&q=lyon')
      .then(response => response.json())
      .then(data => {
        this.donneesApi = data;
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de l\'appel de l\'API :', error);
      });
  }

  detached() {
    if (this.subscription) {
      this.subscription.dispose();
    }
  }
}
