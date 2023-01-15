import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Rectangle from "../Icons/Rectangle.png";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import PlaceIcon from "@mui/icons-material/Place";
import LightModeIcon from "@mui/icons-material/LightMode";

export const WeatherApp = () => {
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
            Sunday
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
            15 Jan 2023
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
          <Button
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
