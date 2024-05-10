export class Coord {
    constructor(
      public lon: number,
      public lat: number
    ) {}
  }
  
  export class Weather {
    constructor(
      public id: number,
      public main: string,
      public description: string,
      public icon: string
    ) {}
  }
  
  export class Main {
    constructor(
      public temp: number,
      public feels_like: number,
      public temp_min: number,
      public temp_max: number,
      public pressure: number,
      public humidity: number
    ) {}
  }
  
  export class Wind {
    constructor(
      public speed: number,
      public deg: number,
      public gust: number
    ) {}
  }
  
  export class Clouds {
    constructor(
      public all: number
    ) {}
  }
  
  export class Sys {
    constructor(
      public type: number,
      public id: number,
      public country: string,
      public sunrise: number,
      public sunset: number
    ) {}
  }
  
  export class WeatherResponse {
    constructor(
      public coord: Coord,
      public weather: Weather[],
      public base: string,
      public main: Main,
      public visibility: number,
      public wind: Wind,
      public clouds: Clouds,
      public dt: number,
      public sys: Sys,
      public timezone: number,
      public id: number,
      public name: string,
      public cod: number
    ) {}
  }

  