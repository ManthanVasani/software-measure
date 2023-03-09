import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Review from "./Review";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const theme = createTheme();

export default function Pf1(props) {
  let history = useHistory();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const location = useLocation();

  //   const [cardname, setCardname] = useState("");
  //   console.log("first name bla bla..", props.location.state.firstname);
  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);

    history.push({
      pathname: "/r1",
      state: {
        firstname: firstname,
        lastname: lastname,
        nameoncard: data.get("cardName"),
        cardnumber: data.get("cardNumber"),
        expiry: data.get("expDate"),
        cvv: data.get("cvv"),
        address: props.location.state.address,
        city: props.location.state.city,
        state: props.location.state.state,
        zip: props.location.state.zip,
        country: props.location.state.country,
      },
    });
    console.log("clicked");
  };

  useEffect(() => {
    console.log("firstname: ", props.location.state.firstname);
    setFirstname(props.location.state.firstname);
    console.log("lastname: ", props.location.state.lastname);
    setLastname(props.location.state.lastname);
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <React.Fragment>
            {/* <Review cardname={cardname} /> */}
            <Typography variant="h6" gutterBottom>
              Payment method
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="cardName"
                    label="Name on card"
                    fullWidth
                    autoComplete="cc-name"
                    variant="standard"
                    name="cardName"
                    value={firstname + " " + lastname}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="cardNumber"
                    label="Card number"
                    fullWidth
                    autoComplete="cc-number"
                    variant="standard"
                    name="cardNumber"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="expDate"
                    label="Expiry date"
                    fullWidth
                    autoComplete="cc-exp"
                    name="expDate"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="cvv"
                    label="CVV"
                    helperText="Last three digits on signature strip"
                    fullWidth
                    autoComplete="cc-csc"
                    name="cvv"
                    variant="standard"
                  />
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Next
                </Button>
              </Grid>
            </Box>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
