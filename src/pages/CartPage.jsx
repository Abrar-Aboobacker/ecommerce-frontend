import React from "react";
import Cart from "../components/Cart/Cart";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";

const CartPage = () => {
  return (
    <>
      <Box sx={{ mt: 2, ml: "8%", mr: "8%" }}>
        <Navbar />
        <Cart />
      </Box>
    </>
  );
};

export default CartPage;
