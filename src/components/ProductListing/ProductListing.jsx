import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Modal,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useFormik } from "formik";
import { productSchema } from "../../validation/productValidation";
import toast from "react-hot-toast";
import axios from "../../axios/axios";
import Pagination from "./Pagination";
import { baseURL } from "../../constants/constant";
import { Link } from "react-router-dom";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const ProductListing = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [serachTerm, setSearchTerm] = useState("");
  const modalHandler = () => {
    setOpen(true);
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const filteredProduct = products.filter((product) => {
    const matchesSearchTerm = product.name
      .toLowerCase()
      .includes(serachTerm.toLowerCase());
    return matchesSearchTerm;
  });


  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };
  const getproducts = async () => {
    try {
      const response = await axios.get("/getAllProduct", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("usertoken")}`,
        },
      });
      if (response.data.success) {
        setProducts(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getproducts();
  }, []);
  const formik = useFormik({
    initialValues: {
      name: "",
      quantity: "",
      discription: "",
      price: "",
      file: null,
    },
    validationSchema: productSchema,
    onSubmit: async (values, helpers) => {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("quantity", values.quantity);
        formData.append("discription", values.discription);
        formData.append("price", values.price);
        for (let i = 0; i < values.file.length; i++) {
          formData.append("file", values.file[i]);
        }
        const response = await axios.post("/addProduct", formData, {});
        if (response.data.success) {
          toast.success(response.data.message);
          getproducts();
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        helpers.setErrors({ submit: error.message });
        toast.error("Please login");
      }
    },
  });
  const totalProducts = filteredProduct.length;
  const indexOfLastProduct = currentPage * postsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
  const currentProducts = filteredProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 3,
          mb: 3,
        }}
      >
        <Button
          onClick={() => modalHandler()}
          variant="contained"
          sx={{
            display: { xs: "none", sm: "block" },
            backgroundColor: "#2879fe",
            px: 8.5,
            py: 2,
            color: "white",
            fontWeight: 600,
            letterSpacing: 2,
            mr: 2,
          }}
        >
          Add Product
        </Button>
        <StyledModal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            width={400}
            height={450}
            bgcolor={"background.default"}
            color={"text.primary"}
            p={3}
            borderRadius={5}
          >
            <Typography
              variant="h6"
              color="gray"
              textAlign="center"
              marginBottom={3}
            >
              Product Details
            </Typography>

            <TextField
              type="text"
              fullWidth
              name="name"
              margin="normal"
              size="small"
              sx={{ backgroundColor: "white" }}
              label="Name of Product"
              variant="outlined"
              value={formik.values.name}
              error={formik.errors.name}
              helperText={formik.errors.name}
              onChange={formik.handleChange}
            />
            <TextField
              type="number"
              name="quantity"
              fullWidth
              margin="normal"
              size="small"
              sx={{ backgroundColor: "white" }}
              label="Quantity"
              variant="outlined"
              value={formik.values.quantity}
              error={formik.errors.quantity}
              helperText={formik.errors.quantity}
              onChange={formik.handleChange}
            />
            <TextField
              type="number"
              fullWidth
              name="price"
              margin="normal"
              size="small"
              sx={{ backgroundColor: "white" }}
              label="Price of the product"
              variant="outlined"
              value={formik.values.price}
              error={formik.errors.price}
              helperText={formik.errors.price}
              onChange={formik.handleChange}
            />
            <TextField
              type="text"
              name="discription"
              fullWidth
              margin="normal"
              size="small"
              sx={{ backgroundColor: "white" }}
              label="Enter the the description"
              variant="outlined"
              value={formik.values.discription}
              error={formik.errors.discription}
              helperText={formik.errors.discription}
              onChange={formik.handleChange}
            />
            <input
              focused
              required
              fullWidth
              multiple
              margin="normal"
              type="file"
              size="small"
              name="file"
              onChange={(e) => {
                formik.setFieldValue("file", e.currentTarget.files);
              }}
              label="upload your Images"
              variant="outlined"
            />
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              marginTop={3}
            >
              <Button
                variant="contained"
                color="inherit"
                type="submit"
                name="submit"
                onClick={() => {
                  formik.handleSubmit();

                  setOpen(false);
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </StyledModal>
        <Box sx={{ flex: 1 }}>
          <TextField
            fullWidth
            onChange={handleSearchTermChange}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                background: "rgba(255, 255, 255, 0.3)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              },
              "& .MuiOutlinedInput-input": {
                color: "grey",
                fontFamily: "inherit",
              },
            }}
            variant="outlined"
            placeholder="Search Products...."
            InputProps={{
              startAdornment: <SearchIcon color="action" />,
            }}
          />
        </Box>
      </Box>
      {products && products.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 5,
          }}
        >
          
          {currentProducts.map((value) => (
          
            <Card
              elevation={2}
              sx={{
                width: { xs: "95%", sm: 350 },
                mt: { xs: 10 },
                maxWidth: 400,
              }}
            >
              <CardActionArea>
                <img
                  src={`${baseURL}${value?.image[0]}`}
                  alt=""
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{ textAlign: "center", fontWeight: 600, fontSize: 25 }}
                  >
                    {value.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign={"center"}
                  >
                   {value.discription}
                  </Typography>

                  <Typography sx={{ mt: 2 }} textAlign={"center"}>
                    Qantity:{" "}
                    <span style={{ fontWeight: 600 }}>{value.quantity}</span>
                  </Typography>

                  <Typography sx={{ mt: 2 }} textAlign={"center"}>
                    Price:{" "}
                    <span style={{ fontWeight: 600 }}>{value.price}</span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link to={`/products/${value._id}`}>
                <Button size="small" color="primary">
                  More details
                </Button>
                </Link>
              </Box>
            </Card>
            
          ))}
        </Box>
      ) : (
        <Box>
          <Typography fontWeight={400} variant="h6" textAlign={"center"}>
            Currently there is No products add products
          </Typography>
        </Box>
      )}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalProducts}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Box>
    </>
  );
};

export default ProductListing;
