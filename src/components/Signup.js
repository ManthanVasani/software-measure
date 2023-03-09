import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { v4 as uuid } from "uuid";
import axios, { Axios } from "axios";
import { useState } from "react";
import Alert from "@mui/material/Alert";


const theme = createTheme();

export default function Signup() {
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    // event.preventDefault();
    const data = new FormData(event.currentTarget);
    const unique_id = uuid();
    const unique_user_id = unique_id.slice(0, 8);
    console.log("id: ", unique_user_id);
    console.log("firstname", data.get("firstname"));

    if (
      data.get("firstName") !== "" &&
      data.get("lastName") !== "" &&
      data.get("email") !== "" &&
      data.get("address") !== "" &&
      data.get("city") !== "" &&
      data.get("state") !== "" &&
      data.get("zipcode") !== "" &&
      data.get("phoneno") !== ""
    ) {
      axios
        .post("https://measure-proj.herokuapp.com/api/insert/userdata", {
          user_id: unique_user_id,
          firstname: data.get("firstName"),
          lastName: data.get("lastName"),
          useremail: data.get("email"),
          password: data.get("password"),
          address: data.get("address"),
          city: data.get("city"),
          state: data.get("state"),
          zip: data.get("zipcode"),
          phone: data.get("phoneno"),
        })
        .then(() => {
          setError("");
          alert("successful insert");
        });
    } else {
      setError("error");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          {error === "error" && (
              <Alert severity="error">Enter all required informations</Alert>
            )}
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneno"
                  label="Phone Number"
                  name="phoneno"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
                  id="state"
                  label="State"
                  name="state"
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
                  id="zipcode"
                  label="Zip Code"
                  name="zipcode"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Set Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
