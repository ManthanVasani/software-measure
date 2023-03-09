import React from "react";
import { Link } from "react-router-dom";

export default function Adminbar() {
  return (
    <nav
      className="nav-wrapper"
      style={{ backgroundColor: "#000000", contentVisibility: "auto" }}
    >
      <div className="container">
        <Link to="/adminbar" className="brand-logo">
          Admin Panel
        </Link>

        <ul className="right">
          <li>
            <Link to="/displayorders">Displayorders</Link>
          </li>
          <li>
            <Link to="/addproject">Add Project</Link>
          </li>
          <li>
            <Link to="/addplants">Add Plants</Link>
          </li>
          <li>
            <Link to="/viewplants">View Plants</Link>
          </li>
          <li>
            <Link to="/addemployee">Add Employee</Link>
          </li>
          <li>
            <Link to="/employeeinfo">Employee Info</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
