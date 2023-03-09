import * as React from "react";
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
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";
import axios, { Axios } from "axios";

const theme = createTheme();

function R1(props) {
  let history = useHistory();
  const location = useLocation();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [nameoncard, setNameoncard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [address, setAddress] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [items1, setItems] = useState([]);
  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  const unique_id = uuid();
  const unique_order_id = unique_id.slice(0, 8);
  console.log("id: ", unique_order_id);

  const itemsnanme = [];
  var quantity = 0;

  for (var i = 0; i < props.items.length; i++) {
    console.log(props.items[i].quantity);
    quantity = quantity + props.items[i].quantity;
    // setTotalquantity(totalquantity + props.items[i].quantity);
  }

  const handleSubmit = () => {
    axios
      .post("https://measure-proj.herokuapp.com/api/insert/orderdata", {
        order_id: unique_order_id,
        firstname: firstname,
        lastname: lastname,
        clientid: "be662a95",
        employeeid: "a8c8192e",
        starting_bal: 0,
        address: address,
        city: city,
        state: state,
        zip: zip,
        country: country,
        productname: props.items[0].title,
        quantity: quantity,
        totalcost: props.total,
        datalength: props.items.length,
        allproductsname: itemsnanme,
        orderdate: date,
        project_id: "NA",
        date_modified: "2021-01-01",
      })
      .then(() => {
        alert("successful insert");
      });
    history.push({
      pathname: "/thankyou",
      state: {
        orderid: unique_order_id,
        deliverydate: `${current.getFullYear()}-${current.getMonth() + 1}-${
          current.getDate() + 5
        }`,
      },
    });
  };

  console.log("date: ", date);

  useEffect(() => {
    console.log("address: ", props.location.state.address);
    setFirstname(props.location.state.firstname);
    setLastname(props.location.state.lastname);
    setNameoncard(props.location.state.nameoncard);
    setAddress(props.location.state.address);
    setCardnumber(props.location.state.cardnumber);
    setExpiry(props.location.state.expiry);
    console.log("city: ", props.location.state.city);
    setCity(props.location.state.city);
    setState(props.location.state.state);
    setZip(props.location.state.zip);
    setCountry(props.location.state.country);

    // setLastname(props.location.state.lastname);
  }, [location]);

  for (var i = 0; i < props.items.length; i++) {
    console.log("for loop");
    console.log("titles: ", props.items[i].title);
    itemsnanme.push(props.items[i]);
    // setItems({ value: props.items[i].title });
    // setItems((items1) => [...items1, props.items[i].title]);
  }

  console.log("firstname bla..", props);
  console.log(props.items[0].title);
  console.log("length: ", props.items.length);
  console.log("items: ", itemsnanme);

  const addresses = [address, city, state, zip, country];

  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: nameoncard },
    { name: "Card number", detail: cardnumber },
    { name: "Expiry date", detail: expiry },
  ];

  // console.log("cardname32: ", cardnamefinal);

  // console.log(props.items[0].quantity);
  // console.log(props.items[1].quantity);
  // const [quacount, setQuacount] = useState(0);
  // for (var i = 0; i <= props.items.length; i++) {
  //   setQuacount(quacount + props.items[i].quantity);
  // }
  // console.log(quacount);

  // props.items.map((item) => {
  //   setQuacount(quacount + item.quantity);
  //   // total_quantity = total_quantity + item.quantity;
  // });

  // const [products1, setProducts1] = useState([]);
  // props.items.map((item) => {
  //   console.log("item: ", item);
  // });

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
            <Typography variant="h6" gutterBottom>
              Order summary
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <List disablePadding>
                {props.items.map((item) => (
                  <ListItem key={item.title} sx={{ py: 1, px: 0 }}>
                    <ListItemText
                      primary={item.title + ", Quantity: " + item.quantity}
                      secondary={item.desc}
                    />{" "}
                    <Typography variant="body2">
                      ${item.price * item.quantity}
                    </Typography>
                  </ListItem>
                ))}

                <ListItem sx={{ py: 1, px: 0 }}>
                  <ListItemText primary="Total" />
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    ${props.total}
                  </Typography>
                </ListItem>
              </List>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Shipping
                  </Typography>
                  <Typography gutterBottom>{nameoncard}</Typography>
                  <Typography gutterBottom>{addresses.join(", ")}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Payment details
                  </Typography>

                  <Grid container>
                    <>
                      <Grid item xs={6}>
                        <Typography gutterBottom>Visa</Typography>
                        <Typography gutterBottom>{nameoncard}</Typography>

                        <Typography gutterBottom>{cardnumber}</Typography>

                        <Typography gutterBottom>{expiry}</Typography>
                      </Grid>
                    </>
                    {/* {payments.map((payment) => (
                    <React.Fragment key={payment.name}>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{payment.name}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{payment.detail}</Typography>
                      </Grid>
                    </React.Fragment>
                  ))} */}
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Order Conform
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    total: state.total,
    //addedItems: state.addedItems
  };
};

export default connect(mapStateToProps)(R1);
