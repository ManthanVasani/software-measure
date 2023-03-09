import React from "react";
import axios, { Axios } from "axios";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { useHistory } from "react-router-dom";

const theme = createTheme();

export default function Myorder(props) {
  let history = useHistory();

  const [orderdata, setOrderdata] = useState([]);

  axios
    .post("https://measure-proj.herokuapp.com/api/get/personalorder", {
      userid: props.location.state.clientid,
    })
    .then((response) => {
      setOrderdata(response.data);
    });

  return (
    <ThemeProvider theme={theme}>
      <>
        <Container component="main" maxWidth="m" sx={{ mb: 4 }}>
          <Typography component="h1" variant="h5">
            My Orders
          </Typography>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <table>
              <tbody>
                <tr>
                  <th>Order Id</th>
                  <th>Order Date</th>
                  <th>Employee Id</th>
                  <th>Client Id</th>
                  <th>Project Id</th>
                  <th>Date Modified</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Total Order Cost</th>
                  <th> Address </th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip</th>
                  <th>Country</th>
                </tr>
                {orderdata.map((val) => {
                  return (
                    <tr>
                      <td>{val !== null ? val.order_id : ""}</td>
                      <td>{val !== null ? val.order_date : ""}</td>
                      <td>{val !== null ? val.employee_id : ""}</td>
                      <td>{val !== null ? val.client_id : ""}</td>
                      <td>{val !== null ? val.project_id : ""}</td>
                      <td>{val !== null ? val.date_modified : ""}</td>
                      <td>{val !== null ? val.firstname : ""}</td>
                      <td>{val !== null ? val.lastname : ""}</td>
                      <td>{val !== null ? val.productname : ""}</td>
                      <td>{val !== null ? val.quantity : ""}</td>
                      <td>{val !== null ? val.totalprice : ""}</td>
                      <td>{val !== null ? val.address : ""}</td>

                      <td>{val !== null ? val.city : ""}</td>

                      <td>{val !== null ? val.state : ""}</td>
                      <td>{val !== null ? val.zip : ""}</td>
                      <td>{val !== null ? val.country : ""}</td>
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
