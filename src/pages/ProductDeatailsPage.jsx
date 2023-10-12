import React from "react";
import ProductDetails from "../components/ProductsDetails/ProductDetails";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";

const ProductDeatailsPage = () => {
    const { id } = useParams();
  return (
    <>
      <Box sx={{mt:2,ml:'8%',mr:'8%'}}>
        <Navbar/>
        <ProductDetails id={id} />
      </Box>
    </>
  );
};

export default ProductDeatailsPage;
