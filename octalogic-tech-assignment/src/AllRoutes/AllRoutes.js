import React from "react";
import {Routes,Route} from "react-router-dom";
import BookingUser from "../Components/BookingUser";
import ViewUser from "../Components/ViewUser";

const AllRoutes = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<BookingUser />} /> 
          <Route path="/users" element={<ViewUser />} />
        </Routes>
      </>
    );
  };
  
  export default AllRoutes;