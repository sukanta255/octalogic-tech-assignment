import "../src/App.css";
import React, { useState } from 'react';
import {BrowserRouter} from "react-router-dom";
import AllRoutes from './AllRoutes/AllRoutes';


const App = () => {
  return (
    <BrowserRouter>
      <AllRoutes/>
    </BrowserRouter>
  );
};

export default App;