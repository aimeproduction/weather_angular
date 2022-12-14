export interface FiveDayForecast {
  city: {
    id: number,
    name: string,
    coord: {
      lon: number
      lat: number
    },
    country: string,
    population: number,
    timezone: number
  }
  cnt: number
  cod: string
  list: [
    {
      clouds: number
      deg: number
      dt: number
      feels_like:
        {
          day: number
          night: number,
          eve: number,
          morn: number
        }
      gust: number
      humidity: number
      pop: number
      pressure: number
      speed: number
      sunrise: number
      sunset: number
      temp: {
        day: number
        eve: number
        max: number
        min: number
        morn: number
        night: number
      }
      weather: [
        {
        description: string
        icon: string
        id: number
        main: string
      }
      ]
    }
  ]

  message: number
}
