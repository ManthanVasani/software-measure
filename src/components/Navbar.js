import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = (props) => {
  var quantity = 0;
  for (var i = 0; i < props.items.length; i++) {
    console.log(props.items[i].quantity);
    quantity = quantity + props.items[i].quantity;
    // setTotalquantity(totalquantity + props.items[i].quantity);
  }
  console.log("quan: ", quantity);
  return (
    <nav
      className="nav-wrapper"
      style={{ backgroundColor: "#e27013", contentVisibility: "auto" }}
    >
      <div className="container">
        <Link to="/products" className="brand-logo">
        Purely Nature
        </Link>

        <ul className="right">
        <li>
            <Link to="/products">Products</Link>
          </li>
        <li>
            <Link to="/signin">Signin</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>


         
          <li>
            <Link to="/cart">My cart</Link>
          </li>
          <li
            style={{
              borderRadius: "50%",
              border: "3px solid white",
              width: "65px",
              height: "65px",
              textAlign: "center",
            }}
          >
            <Link to="/cart">
              {" "}
              {/* <i className="material-icons">shopping_cart </i>  */}{" "}
              {quantity}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    total: state.total,
    //addedItems: state.addedItems
  };
};

export default connect(mapStateToProps)(Navbar);
