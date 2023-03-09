import axios from "axios";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { IconButton, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Adminbar from "./Adminbar";

const theme = createTheme();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Displayorders() {
  const [orderdata, setOrderdata] = useState([]);
  const [editpopup, setEditPopup] = useState(false);
  const [editselected, seteditSelected] = useState("");

  axios
    .get("https://measure-proj.herokuapp.com/api/get/orders")
    .then((response) => {
      setOrderdata(response.data);
    });

  // console.log("order data blass..", orderdata);

  // useEffect(() => {
  //   axios.get("https://my-dbms-backend.herokuapp.com/api/get/orders").then((response) => {
  //     setOrderdata(response.data);
  //     // console.log("response data gg: ", response.data);
  //   });
  // }, [orderdata]);

  function handleDeleteData(order_id) {
    axios.post("https://measure-proj.herokuapp.com/api/delete/orderdata", {
      orderid: order_id,
    });
    console.log("delete fired");
    console.log("order id: ", order_id);
  }

  function handleEditOpen(order_id) {
    setEditPopup(true);
    seteditSelected(order_id);

    console.log("edit fired");
    console.log("order id: ", order_id);
  }

  const handleEditClose = () => {
    setEditPopup(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post("https://measure-proj.herokuapp.com/api/update/orderdata", {
      orderid: editselected,
      newfirstname: data.get("firstname"),
      newlastname: data.get("lastname"),
      newquantity: data.get("quantity"),
      newprice: data.get("totalprice"),
    });

    console.log("clicked");
    setEditPopup(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Adminbar />
      <>
        <Container component="main" maxWidth="m" sx={{ mb: 4 }}>
          <Typography component="h1" variant="h5">
            Orders
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
                  <th>Delete</th>
                  <th>Edit</th>
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

                      <td>
                        <IconButton
                          onClick={() => handleDeleteData(val.order_id)}
                        >
                          <Tooltip title="Delete">
                            <DeleteIcon />
                          </Tooltip>
                        </IconButton>
                      </td>
                      <td>
                        <IconButton
                          onClick={() => handleEditOpen(val.order_id)}
                        >
                          <Tooltip title="Edit">
                            <EditIcon />
                          </Tooltip>
                        </IconButton>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Paper>
        </Container>
        <Modal
          open={editpopup}
          onClose={handleEditClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} component="form" noValidate onSubmit={handleSubmit}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Order
            </Typography>

            <Grid item xs={12} md={6}>
              <TextField
                required
                id="firstname"
                label="First Name"
                fullWidth
                variant="standard"
                name="firstname"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="lastname"
                label="Last Name"
                fullWidth
                variant="standard"
                name="lastname"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                id="quantity"
                label="Quantity"
                fullWidth
                variant="standard"
                name="quantity"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                id="totalprice"
                label="Total Price"
                fullWidth
                variant="standard"
                name="totalprice"
              />
            </Grid>

            <div style={{ display: "flex" }}>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  setEditPopup(false);
                }}
              >
                Close
              </Button>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 2 }}
              >
                Update
              </Button>
            </div>
          </Box>
        </Modal>
      </>
    </ThemeProvider>
  );
}
