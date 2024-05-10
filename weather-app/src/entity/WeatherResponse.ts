
    interface Coord {
        lon: number;
        lat: number;
      }
      
      interface Weather {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
      
      interface Main {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
      }
      
      interface Wind {
        speed: number;
        deg: number;
        gust: number;
      }
      
      interface Clouds {
        all: number;
      }
      
      interface Sys {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
      }
      
      interface WeatherData {
        coord: Coord;
        weather: Weather[];
        base: string;
        main: Main;
        visibility: number;
        wind: Wind;
        clouds: Clouds;
        dt: number;
        sys: Sys;
        timezone: number;
        id: number;
        name: string;
        cod: number;
      }
      
      
      

export class WeatherResponse {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  
    constructor(data: WeatherData) {
      this.coord = data.coord;
      this.weather = data.weather;
      this.base = data.base;
      this.main = data.main;
      this.visibility = data.visibility;
      this.wind = data.wind;
      this.clouds = data.clouds;
      this.dt = data.dt;
      this.sys = data.sys;
      this.timezone = data.timezone;
      this.id = data.id;
      this.name = data.name;
      this.cod = data.cod;
    }
  }