import React from "react";
import { v4 as uuid } from "uuid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import axios from "axios";

const theme = createTheme();

export default function Thankyou(props) {
  const [orderid, setOrderid] = useState("");
  const [deliverydate, setDeliverydate] = useState("");
  const unique_id = uuid();
  const delivery_id = unique_id.slice(0, 8);

  useEffect(() => {
    // setOrderid(props.location.state.orderid);
    // setDeliverydate(props.location.state.deliverydate);

    axios.post(
      "https://measure-proj.herokuapp.com/api/insert/deliveryinfo",
      {
        delivery_id: delivery_id,
        orderid: props.location.state.orderid,
        deliverydate: props.location.state.deliverydate,
        deliverytime: "10am",
        deliverydistance: "3 miles",
        deliveryfee: "6",
      }
    );
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Thank you for the order
            </Typography>

            <Typography variant="h6" gutterBottom>
              Your order id: {props.location.state.orderid}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Your delivery id: {delivery_id}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Expected delivery date: {props.location.state.deliverydate}
              <br /> Expected delivery time: 5pm
            </Typography>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
