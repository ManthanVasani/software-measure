import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";
import { useState } from "react";

const products = [
  {
    name: "Product 1",
    desc: "A nice thing",
    price: "$9.99",
  },
  {
    name: "Product 2",
    desc: "Another thing",
    price: "$3.45",
  },
  {
    name: "Product 3",
    desc: "Something else",
    price: "$6.51",
  },
  {
    name: "Product 4",
    desc: "Best thing of all",
    price: "$14.11",
  },
  { name: "Shipping", desc: "", price: "Free" },
];

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

function Review(props) {
  console.log("card name", props.cardname);

  var quantity = 0;
  for (var i = 0; i < props.items.length; i++) {
    console.log(props.items[i].quantity);
    quantity = quantity + props.items[i].quantity;
    // setTotalquantity(totalquantity + props.items[i].quantity);
  }
  console.log(quantity);
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
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      {console.log("card name 1", props.cardname)}
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
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>{props.cardname}</Typography>
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
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    total: state.total,
    //addedItems: state.addedItems
  };
};

export default connect(mapStateToProps)(Review);
