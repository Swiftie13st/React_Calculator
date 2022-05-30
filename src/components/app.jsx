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
                <Route path="/calculator/" element={<Home />} />
                <Route path="/calculator/home" element={<Home />} />
                <Route path="/calculator/calculator" element={<Calculator />} />
                <Route path="/calculator/login" element={<Login />} />
                <Route path="/calculator/register" element={<Register />} />
                <Route path="/calculator/404" element={<NotFound />} />
                <Route
                  path="/calculator/*"
                  element={<Navigate replace to="/calculator/404" />}
                />
              </Routes>
            </div>
          </React.Fragment>
        );
    }
}
 
export default APP;