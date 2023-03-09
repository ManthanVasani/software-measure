import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios, { Axios } from "axios";
import { v4 as uuid } from "uuid";
import Adminbar from "./Adminbar";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";

const theme = createTheme();

export default function Addplants() {
  const [error, setError] = useState("");

  // const [plantname, setPlantname] = useState("");
  // const [plantdescription, setPlantdescription] = useState("");
  // const [plantcolor, setPlantcolor] = useState("");
  // const [size, setSize] = useState("");
  // const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const unique_id = uuid();
    const plantunique_id = unique_id.slice(0, 8);
    console.log("id: ", plantunique_id);

    // setPlantname(data.get("plantname"));
    // setPlantdescription(data.get("plantdescription"));
    // setPlantcolor(data.get("plantcolor"));
    // setSize(data.get("size"));
    // setPrice(data.get("price"));

    // console.log("jd", data.get("plantname"));
    // console.log("jd1", data.get("plantdescription"));

    // data.values("");

    let body_data = {
      plantnameexp: "abc",
      plantdescriptionexp: "bdf",
    };
    body_data = JSON.stringify(body_data);

    // fetch("https://my-dbms-backend.herokuapp.com/api/insert", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     profile_image_link: "https://demo.link",
    //   }),
    // })
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));

    if (
      data.get("plantname") !== "" &&
      data.get("plantdescription") !== "" &&
      data.get("plantcolor") !== "" &&
      data.get("size") !== "" &&
      data.get("price") !== ""
    ) {
      axios
        .post("https://measure-proj.herokuapp.com/api/insert", {
          plant_id: plantunique_id,
          plantname: data.get("plantname"),
          plantdescription: data.get("plantdescription"),
          plantcolor: data.get("plantcolor"),
          size: data.get("size"),
          price: data.get("price"),
        })
        .then(() => {
          setError("");
          alert("Successful insert");
        });

      // console.log({
      //   plantid: plantunique_id,
      //   plantname: plantname,
      //   plantdescription: plantdescription,
      //   plantcolor: plantcolor,
      //   size: size,
      //   price: price,
      // });
    } else {
      setError("error");
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Adminbar />
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
            {error === "error" && (
              <Alert severity="error">Enter all required informations</Alert>
            )}
            <Typography component="h1" variant="h5">
              Add Plants
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="plantname"
                    name="plantname"
                    label="Plant Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="plantdescription"
                    name="plantdescription"
                    label="Description"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="plantcolor"
                    name="plantcolor"
                    label="Plant Color"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Size"
                    name="size"
                    id="size"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Price"
                    name="price"
                    id="price"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Grid container justifyContent="flex-end"></Grid>
            </Box>
          </Box>
        </Container>

        {/* {plantdata.map((val) => {
        return (
          <div>
            <h4>Plant Id: {val.plant_id} </h4>;
            <table>
              <tbody>
                <tr>
                  <td>Plant Id</td>
                  <td>Plant Name</td>
                  <td>Color</td>
                  <td>Size</td>
                  <td>Price</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })} */}
      </ThemeProvider>
    </div>
  );
}
