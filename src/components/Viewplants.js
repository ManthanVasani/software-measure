import React from "react";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Adminbar from "./Adminbar";
const theme = createTheme();

export default function Viewplants() {
  const [plantdata, setPlantdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://measure-proj.herokuapp.com/api/get")
      .then((response) => {
        setPlantdata(response.data);
        console.log("res: ", response.data);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Adminbar />
      <Container component="main" maxWidth="m" sx={{ mb: 4 }}>
        <Typography component="h1" variant="h5">
          Plants
        </Typography>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <table>
            <tbody>
              <tr>
                <th>Plant Id</th>
                <th>Plant Name</th>
                <th>Color</th>
                <th>Size</th>
                <th>Price</th>
              </tr>
              {plantdata.map((val) => {
                return (
                  <tr>
                    <td>{val !== null ? val.plant_id : ""}</td>
                    <td>{val !== null ? val.plant_name : ""}</td>
                    <td>{val !== null ? val.color : ""}</td>
                    <td>{val !== null ? val.plant_size : ""}</td>
                    <td>{val !== null ? val.plant_price : ""}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
