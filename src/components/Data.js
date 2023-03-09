import React from "react";
import { connect } from "react-redux";

function Data(props) {
  const addedItems = props.items.length ? (
    props.items.map((item) => {
      console.log("Item title: ", item);
      console.log("Item quantity: ", item.quantity);
      return (
        <li className="collection-item avatar" key={item.id}>
          <div className="item-img">
            <img src={item.img} alt={item.img} className="" />
          </div>

          <div className="item-desc">
            <span className="title">{item.title}</span>
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
            <p>
              <b>Quantity: {item.quantity}</b>
            </p>
          </div>
        </li>
      );
    })
  ) : (
    <p>nothing</p>
  );
  return (
    <div className="container">
      <div className="cart">
        <h5>You have ordered:</h5>
        <ul className="collection">{addedItems}</ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    //addedItems: state.addedItems
  };
};

export default connect(mapStateToProps)(Data);
