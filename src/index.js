import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './pages/Menu';
import Login from './pages/login';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from "./pages/Report"
import UrlPramCheck from "./components/UrlPramCheck"


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Menu />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="/report/:orderId" element={<UrlPramCheck />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);