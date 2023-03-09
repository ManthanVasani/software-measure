import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
// import Signin from './components/Signin';
import Products from "./components/Products";
import Signin1 from "./components/Signinuser";
import Signup from "./components/Signup";
import Forgotpassword from "./components/Forgotpassword";
import Addressform from "./checkouts/Addressform";
import Checkout from "./checkouts/Checkout";
import Review from "./checkouts/Review";
import Addplants from "./components/Addplants";
import Addproject from "./components/Addproject";
import Addemployee from "./components/Addemployee";
import Signinemployee from "./components/Signinemployee";
import Displayorders from "./components/Displayorders";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Data from "./components/Data";
import Paymentform from "./checkouts/Paymentform";
import Af1 from "./checkouts/Af1";
import Pf1 from "./checkouts/Pf1";
import R1 from "./checkouts/r1";
import Thankyou from "./checkouts/Thankyou";
import Adminbar from "./components/Adminbar";
import Employeeinfo from "./components/Employeeinfo";
import Myorder from "./components/Myorder";
import Viewplants from "./components/Viewplants";
import ViewProjects from "./components/ViewProjects";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Products} exact />
        <Route path="/products" component={Products} exact />

        <Route path="/signin" component={Signin1} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/forgotpassword" component={Forgotpassword} exact />
        <Route path="/addressform" component={Addressform} exact />
        <Route path="/checkout" component={Checkout} exact />
        <Route path="/review" component={Review} exact />
        <Route path="/addplants" component={Addplants} exact />
        <Route path="/addproject" component={Addproject} exact />
        <Route path="/addemployee" component={Addemployee} exact />
        <Route path="/signinemployee" component={Signinemployee} exact />
        <Route path="/displayorders" component={Displayorders} exact />
        <Route path="/navbar" component={Navbar} exact/>
        <Route path="/data" component={Data} exact />

        <Route path="/cart" component={Cart} exact />
        <Route path="/paymentform" component={Paymentform} exact />
        <Route path="/af1" component={Af1} exact />
        <Route path="/pf1" component={Pf1} exact />
        <Route path="/r1" component={R1} exact />
        <Route path="/thankyou" component={Thankyou} exact />
        <Route path="/adminbar" component={Adminbar} exact />
        <Route path="/employeeinfo" component={Employeeinfo} exact />
        <Route path="/myorder" component={Myorder} exact />
        <Route path="/viewplants" component={Viewplants} exact />
        <Route path="/viewprojects" component={ViewProjects} exact />


        {/* <Route path="/shipping" component={} exact></Route>
      <Route path="/payment" component={} exact></Route>
      <Route path="/orderadmin" component={} exact></Route>
      <Route path="/profile" component={} exact></Route>
      <Route path="/order" component={} exact></Route> */}
      </Switch>
    </Router>
  );
}
