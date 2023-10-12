import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { baseURL } from '../../constants/constant';

const Cart = () => {
  const [cart, setCart] = useState([]);
  
  const getCart = async () => {
    try {
      const response = await axios.get("/getAllCart", {});
      if (response.data.success) {
        setCart(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <Typography sx={{ mb: 2 }} variant='h5' textAlign='center'>
        SHOPPING CART
      </Typography>
      <Box>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Name of the product</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Image</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart && cart.length > 0 ? (
                  cart.map((cartItem) => (
                    cartItem.items.map((item) => (
                      <TableRow key={item._id}>
                        <TableCell>{item.product.name}</TableCell>
                        <TableCell>Quantity: {item.quantityAdded}</TableCell>
                        <TableCell>Price: {item.product.price}</TableCell>
                        <TableCell>
                          <img src={`${baseURL}${item.product.image[0]}`} alt={item.product.name} width="100" height="100" />
                        </TableCell>
                      </TableRow>
                    ))
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4}>
                      <Typography fontWeight={400} variant="h6">
                        Cart is empty
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
};

export default Cart;
