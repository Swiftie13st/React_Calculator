import React, { Component } from 'react';
import NavBar from './navBar';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./content/pages/home";
import Calculator from "./content/pages/calculator";
import Login from "./content/pages/login";
import Register from "./content/pages/register";
import NotFound from "./content/pages/notfound";


class APP extends Component {
    state = {  } 
    render() { 
        return (
          <React.Fragment>
            <NavBar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate replace to="/404" />} />
              </Routes>
            </div>
          </React.Fragment>
        );
    }
}
 
export default APP;