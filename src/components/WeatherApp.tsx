import { Box, Stack, Typography } from "@mui/material";
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
            width: "40rem",
            height: "20rem",
            position: "absolute",
            borderRadius: "25px",
          }}
        >
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
              ml: "-325px",
              width: "20px",
              height: "20px",
              color: "#fff"
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
              ml: "-325px",
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
              mt: "255px"
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
        </Box>
      </Card>
    </Stack>
  );
};
