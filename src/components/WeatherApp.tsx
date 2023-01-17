import { Box, Button, ButtonGroup, Stack, Typography } from "@mui/material";
import React from "react";
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

export const WeatherApp = () => {
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
            Tuesday
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
            18 Jan 2023
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
            Sheopur, MP, India
          </Typography>
          <LightModeIcon
            sx={{
              position: "absolute",
              mt: "200px",
              ml: "-260px",
              color: "#fff",
              width: "60px",
              height: "60px",
            }}
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
            29 °C
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
            Sunny
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
            PRECIPITATION
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              color: "#fff",
              fontSize: "15px",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              mt: "30px",
              ml: "460px",
            }}
          >
            0°C
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
            42%
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
              ml: "440px",
            }}
          >
            3 km/h
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
            ;
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
