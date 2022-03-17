import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";

import {Nav, Landing, Signup, Room} from "./components/component_export"
import './index.css';

import { BrowserRouter as BrowserRouter, Routes, Route, Link } from "react-router-dom";

ReactDOM.render((
  render(
    <div>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/room:id" element={<Room />}/>
      </Routes>
    </BrowserRouter>
    </div>,
    document.getElementById("root")
  )
)); 