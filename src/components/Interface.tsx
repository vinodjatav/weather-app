export interface ForecastData {
  date: number;
  cityName: string;
  icon: string;
  temperature: number;
  mainView: string;
  visibility: number;
  humidity: number;
  wind: number;
}
export interface listForcast {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}
export interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: listForcast[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export const InitialWeatherData: WeatherData = {
  cod: "200",
  message: 0,
  cnt: 5,
  list: [
    {
      dt: 0,
      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        sea_level: 0,
        grnd_level: 0,
        humidity: 0,
        temp_kf: 0,
      },
      weather: [
        {
          id: 0,
          main: "",
          description: "",
          icon: "",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0,
        deg: 0,
        gust: 0,
      },
      visibility: 0,
      pop: 0,
      sys: {
        pod: "",
      },
      dt_txt: "",
    },
  ],
  city: {
    id: 0,
    name: "",
    coord: {
      lat: 0,
      lon: 0,
    },
    country: "",
    population: 0,
    timezone: 0,
    sunrise: 0,
    sunset: 0,
  },
};

export const InitialForecastData: ForecastData = {
  date: 0,
  cityName: "",
  icon: "",
  temperature: 0,
  mainView: "",
  visibility: 0,
  humidity: 0,
  wind: 0,
};
