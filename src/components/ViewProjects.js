import React from "react";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Adminbar from "./Adminbar";
const theme = createTheme();

export default function ViewProjects() {
  const [plantdata, setPlantdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://measure-proj.herokuapp.com/api/get/projects")
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
          Projects
        </Typography>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <table>
            <tbody>
              <tr>
                <th>Project Id</th>
                <th>Project Name</th>
                <th>Phase</th>
                <th>Type</th>
                <th>Description</th>
                <th>Installation Period</th>
                <th>Start Date</th>
                <th>Address</th>
                <th>Pickup Date</th>
                <th>Total</th>
                <th>Paid Deposit</th>
                

              </tr>
              {plantdata.map((val) => {
                return (
                  <tr>
                    <td>{val !== null ? val.project_id : ""}</td>
                    <td>{val !== null ? val.project_name : ""}</td>
                    <td>{val !== null ? val.phase : ""}</td>
                    <td>{val !== null ? val.p_type : ""}</td>
                    <td>{val !== null ? val.p_description : ""}</td>
                    <td>{val !== null ? val.p_installation : ""}</td>
                    <td>{val !== null ? val.p_start_date : ""}</td>
                    <td>{val !== null ? val.p_address : ""}</td>
                    <td>{val !== null ? val.pickup : ""}</td>
                    <td>{val !== null ? val.project_total : ""}</td>
                    <td>{val !== null ? val.deposit : ""}</td>

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
