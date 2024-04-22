import "../src/App.css";
import React, { useState } from 'react';
import {BrowserRouter} from "react-router-dom";
import AllRoutes from './AllRoutes/AllRoutes';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <BrowserRouter>
      <AllRoutes/>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
};

export default App;