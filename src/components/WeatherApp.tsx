import * as React from "react";
import { Box, Button, ButtonGroup, Stack, Typography } from "@mui/material";
import Rectangle from "../Icons/Rectangle.png";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import PlaceIcon from "@mui/icons-material/Place";
import LightModeIcon from "@mui/icons-material/LightMode";
import { styled } from "@mui/system";

const StyledButtonGroup = styled(ButtonGroup)({
  // change the text color for all buttons
  "& .MuiButtonGroup-grouped": {
    backgroundColor: "#222831",
    color: "#000000",
    "&:hover": {
      backgroundColor: "#8389926b",
    },
  },
  // change the button group dividers color
  "& .MuiButtonGroup-grouped:not(:last-of-type)": {
    borderColor: "#131c1470",
  },
});
interface listForcast {
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
interface WeatherData {
  cod: "200";
  message: 0;
  cnt: 5;
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

export const WeatherApp = () => {
  const [notFoundError, setNotFoundError] = React.useState(false);
  const [weather, setWeather] = React.useState<WeatherData>({
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
  });
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [cityName, setCityName] = React.useState<string>("Gurugram");
  const [date, setDate] = React.useState<Date>(new Date());

  const ConvertTimeUnixIntoIST = (unixTime: number) => {
    const convertedTime = new Date(unixTime * 1000);
    return convertedTime;
  };

  const formatDate = (date: Date) => {
    let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
    let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    return `${da} ${mo} ${ye}`;
  };

  React.useEffect(() => {
    const key = "fbd78134647d6c1d865a4bba3aa9b9d8";
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        cityName +
        "&appid=" +
        key +
        "&cnt=24"
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.cod === "404") {
          setNotFoundError(true);
          console.log(result.message);
        } else {
          setWeather(result);
          setDate(ConvertTimeUnixIntoIST(result.list[0].dt));
          console.log(result);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const lastFourDaysWeatherData = [
    {
      icon: "",
      day: "Tue",
      temp: "30 °C",
    },
    {
      icon: "",
      day: "Wed",
      temp: "22 °C",
    },
    {
      icon: "",
      day: "Thu",
      temp: "06 °C",
    },
    {
      icon: "",
      day: "Fri",
      temp: "26 °C",
    },
  ];
  return (
    <Stack
      sx={{ position: "relative", height: "36rem", backgroundColor: "#1E1E1E" }}
    >
      <Card>
        <Box
          sx={{
            mt: "10%",
            ml: "25%",
            mb: "10%",
            backgroundColor: "#222831",
            width: "32rem",
            height: "20rem",
            position: "absolute",
            borderRadius: "25px",
          }}
        >
          {/* Left Side code */}
          <CardMedia
            sx={{
              position: "absolute",
              ml: "-30px",
              mt: "-30px",
              width: "300px",
              height: "378px",
              borderRadius: "25px",
              background:
                "linear-gradient(152.19deg, rgba(100, 168, 171, 0.9) -0.04%, rgba(83, 91, 230, 0.9) 100%)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            component="img"
            src={Rectangle}
            alt="background image of bank of river"
          />
          <Typography
            sx={{
              position: "absolute",
              color: "#fff",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            {weekday[date.getDay()]}
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              color: "#fff",
              fontSize: "15px",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              mt: "35px",
            }}
          >
            {formatDate(date)}
          </Typography>
          <PlaceIcon
            sx={{
              position: "absolute",
              mt: "65px",
              ml: "-260px",
              width: "20px",
              height: "20px",
              color: "#fff",
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              color: "#fff",
              fontSize: "12px",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              mt: "65px",
              ml: "20px",
            }}
          >
            {weather.city.name}, {weather.city.country}
          </Typography>
          <Box
            component="img"
            sx={{
              position: "absolute",
              mt: "200px",
              ml: "-260px",
              color: "#fff",
              width: "60px",
              height: "60px",
            }}
            alt="Weather icon"
            src={`http://openweathermap.org/img/w/${weather.list[0].weather[0].icon}.png`}
          />
          <Typography
            sx={{
              position: "absolute",
              color: "#fff",
              fontSize: "28px",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              mt: "255px",
            }}
          >
            {(weather.list[0].main.temp - 273.15).toFixed(2)} °C
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              color: "#fff",
              fontSize: "20px",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              mt: "300px",
            }}
          >
            {weather.list[0].weather[0].main}
          </Typography>
          {/* Right Side code */}
          <Typography
            sx={{
              position: "absolute",
              color: "#fff",
              fontSize: "15px",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              mt: "30px",
              ml: "290px",
            }}
          >
            VISIBILITY
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              color: "#fff",
              fontSize: "15px",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              mt: "30px",
              ml: "445px",
            }}
          >
            {weather.list[0].visibility} m
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              color: "#fff",
              fontSize: "15px",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              mt: "60px",
              ml: "290px",
            }}
          >
            HUMIDITY
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              color: "#fff",
              fontSize: "15px",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              mt: "60px",
              ml: "455px",
            }}
          >
            {weather.list[0].main.humidity} %
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              color: "#fff",
              fontSize: "15px",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              mt: "90px",
              ml: "290px",
            }}
          >
            WIND
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              color: "#fff",
              fontSize: "15px",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              mt: "90px",
              ml: "455px",
            }}
          >
            {weather.list[0].wind.speed} m/s
          </Typography>

          <StyledButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{
              position: "absolute",
              ml: "35px",
              mt: "140px",
              borderRadius: "5px",
              ".MuiButtonGroup-root": {
                borderColor: "#131c1470",
              },
            }}
          >
            {lastFourDaysWeatherData.map((data) => {
              return (
                <Button
                  key={data.day}
                  sx={{
                    backgroundColor: "#222831",
                    width: "50px",
                    height: "100px",
                  }}
                >
                  <LightModeIcon
                    sx={{
                      position: "absolute",
                      mt: "-50px",
                      ml: "-7px",
                      color: "#fff",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      color: "#fff",
                      fontSize: "12px",
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      mt: "10px",
                      ml: "-7px",
                      textTransform: "none",
                    }}
                  >
                    {data.day}
                  </Typography>
                  <Typography
                    sx={{
                      position: "absolute",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: "bold",
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      mt: "60px",
                      ml: "-7px",
                      textTransform: "none",
                    }}
                  >
                    {data.temp}
                  </Typography>
                </Button>
              );
            })}
          </StyledButtonGroup>
          <Button
            onClick={() => {
              console.log("Change location called.");
            }}
            sx={{
              position: "absolute",
              background:
                "linear-gradient(90.8deg, rgba(144, 217, 224, 0.9) 0.2%, rgba(84, 96, 230, 0.9) 100%)",
              borderRadius: "10px",
              height: "30px",
              width: "190px",
              mt: "270px",
              ml: "40px",
            }}
          >
            <PlaceIcon
              sx={{
                position: "absolute",
                ml: "-100px",
                width: "20px",
                height: "20px",
                color: "#fff",
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                color: "#fff",
                fontSize: "10px",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                mt: "2px",
                ml: "25px",
              }}
            >
              Change Location
            </Typography>
          </Button>
        </Box>
      </Card>
    </Stack>
  );
};
