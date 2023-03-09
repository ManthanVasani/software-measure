import axios from "axios";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Adminbar from "./Adminbar";

const theme = createTheme();

export default function Employeeinfo() {
  const [employeedata, setEmployeedata] = useState([]);

  axios
    .get("https://measure-proj.herokuapp.com/api/get/employee")
    .then((response) => {
      setEmployeedata(response.data);
    });

  return (
    <ThemeProvider theme={theme}>
      <>
        <Adminbar />
        <Container component="main" maxWidth="m" sx={{ mb: 4 }}>
          <Typography component="h1" variant="h5">
            Employees
          </Typography>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <table>
              <tbody>
                <tr>
                  <th>Employee Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone No</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip code</th>
                </tr>
                {employeedata.map((val) => {
                  return (
                    <tr>
                      <td>{val !== null ? val.employee_id : ""}</td>
                      <td>{val !== null ? val.emp_firstname : ""}</td>
                      <td>{val !== null ? val.emp_lastname : ""}</td>
                      <td>{val !== null ? val.emp_email : ""}</td>
                      <td>{val !== null ? val.emp_phoneno : ""}</td>
                      <td>{val !== null ? val.emp_address : ""}</td>
                      <td>{val !== null ? val.emp_city : ""}</td>
                      <td>{val !== null ? val.emp_state : ""}</td>
                      <td>{val !== null ? val.emp_zipcode : ""}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Paper>
        </Container>
      </>
    </ThemeProvider>
  );
}
