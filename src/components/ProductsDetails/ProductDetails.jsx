import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import payment from "../../Assets/payment.png";

import axios from '../../axios/axios'
import { baseURL } from "../../constants/constant";
import { toast } from 'react-hot-toast';
const ProductDetails = ({id}) => {
  const [count, setCount] = useState(0);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`/singleProductDetails/${id}`, {
        
      });
      if (response.data.success) {
        setProductData(response.data.data);
        
      }
      if (productData.image.length >= 0) {
            setSelectedImage(`${baseURL}${productData?.image[0]}`);
          }
    } catch (error) {
      console.log(error);

    }
  };
  useEffect(()=>{
    fetchProductDetails()
  },[])
  const addtoCart = async () => {
    try {
      const response = await axios.post(`/addToCart`, { count:count,id:id });
      toast.success('Added to cart');
    } catch (err) {
      // Extract relevant information from the error object
      const errorMessage = err.message;
      const errorCode = err.code; // or other relevant error properties
  
      // Render the error message in your component
      return (
        <div>
          <p>Error Message: {errorMessage}</p>
          <p>Error Code: {errorCode}</p>
        </div>
      );
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, 
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs:"row",md:'column'},
            justifyContent: "center",
            gap: 2,
            mt: { xs: 2, sm: 5 },
          }}
        >
          {productData?.image.map((image, index) => (
            <Box
              key={index}
              component="img"
              sx={{
                height: { xs: 55, sm: 99 },
                width: { xs: 40, sm: 79 },
                border: selectedImage === image ? "2px solid blue" : "none",
                transition: "border 0.3s ease-in-out",
              }}
              alt={`Small Image ${index + 1}`}
              src={`${baseURL}${image}`}
              onClick={() => handleImageClick(`${baseURL}${image}`)}
            />
          ))}
        </Box>

        <Box sx={{ mt: { xs: 3, sm: 0 }, ml: { xs: 0, sm: 3 },display:'flex',justifyContent:'center' }}>
          <Box
            component="img"
            sx={{
              height: { xs: "100%", sm: 600 },
              width: { xs: 200, sm: 479 },
              opacity: selectedImage ? 0.8 : 1,
            }}
            alt="Main Product Image"
            src={selectedImage}
          />
        </Box>

        <Box sx={{ mt: 3,display:{xs:'none',sm:'none',md:'block'},ml:2  }}>
        <Typography
          sx={{
            backgroundColor: "#fdbc20",
            width: "12%",
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          Featured
        </Typography>
        <Typography sx={{ mt: 5 }}>SKU: csdf131</Typography>
        <Typography>Availability: <span style={{fontWeight:600}}>{productData?.quantity}</span> in Stock</Typography>
        <Typography variant="h4" sx={{ mt: 5 }}>
          {productData?.name}
        </Typography>
        <Typography sx={{ color: "#2879fe", fontSize: 30 }}>{productData?.price}</Typography>
        <Typography sx={{ width: 550, mt: 2, fontSize: 14 }}>
        {productData?.discription}
        </Typography>
        <Box sx={{ display: "flex", mt: 3 }}>
          <Box sx={{ display: "flex" }}>
            <Button
              disableElevation
              sx={{
                backgroundColor: "#ffffff",
                color: "black",
                ":hover": { backgroundColor: "#ffffff" },
              }}
              variant="contained"
              onClick={handleDecrement}
            >
              -
            </Button>
            <Typography
              sx={{
                backgroundColor: "#ffffff",
                width: "30px",
                textAlign: "center",
                mt: 1,
              }}
            >
              {count}
            </Typography>
            <Button
              disableElevation
              sx={{
                backgroundColor: "#ffffff",
                color: "black",
                ":hover": { backgroundColor: "#ffffff" },
              }}
              variant="contained"
              onClick={handleIncrement}
            >
              +
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              onClick={addtoCart}
              sx={{ width: "300px", backgroundColor: "#2879fe" }}
            >
              <ShoppingBagOutlinedIcon sx={{ mr: 2 }} /> ADD TO CART
            </Button>
          </Box>
        </Box>
        <img style={{ width: "75%", marginTop: "25px" }} src={payment} alt="" />
      </Box>


      </Box>

      <Box sx={{ mt: 3,display:{xs:'block',sm:'block',md:'none'} }}>
        <Typography
        textAlign={'center'}
          sx={{
            backgroundColor: "#fdbc20",
            width: "40%",
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          Featured
        </Typography>
        <Typography textAlign={'center'}  sx={{ mt: 5 }}>SKU: csdf131</Typography>
        <Typography textAlign={'center'} >Availability: <span style={{fontWeight:600}}>{productData?.quantity}</span> in Stock</Typography>
        <Typography variant="h6" sx={{ mt: 2,fontSize:15,fontWeight:600,textAlign:'center' }}>
          {productData?.name}
        </Typography>
        <Typography textAlign={'center'} sx={{ color: "#2879fe", fontSize: 30,mt:1 }}>{productData?.price}</Typography>
        <Typography textAlign={'center'} sx={{ width: '100%', mt: 2, fontSize: 14 }}>
        {productData?.discription}
        </Typography>
        <Box sx={{ display: "block", mt: 3 }}>
          <Box sx={{ display: "flex",justifyContent:'center' }}>
            <Button
              disableElevation
              sx={{
                backgroundColor: "#ffffff",
                color: "black",
                ":hover": { backgroundColor: "#ffffff" },
              }}
              variant="contained"
              onClick={handleDecrement}
            >
              -
            </Button>
            <Typography
              sx={{
                backgroundColor: "#ffffff",
                width: "30px",
                textAlign: "center",
                mt: 1,
              }}
            >
              {count}
            </Typography>
            <Button
              disableElevation
              sx={{
                backgroundColor: "#ffffff",
                color: "black",
                ":hover": { backgroundColor: "#ffffff" },
              }}
              variant="contained"
              onClick={handleIncrement}
            >
              +
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              onClick={addtoCart}
              sx={{ width: "97%", backgroundColor: "#2879fe",mt:2 }}
            >
              <ShoppingBagOutlinedIcon sx={{ mr: 2 }} /> ADD TO CART
            </Button>
          </Box>
        </Box>
        <img style={{ width: "90%", marginTop: "25px" }} src={payment} alt="" />
      </Box>
    </>
  );
};

export default ProductDetails;
