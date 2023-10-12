import {
    // Avatar,
    Badge,
    Box,
    Button,
    Drawer,
    // Menu,
    // MenuItem,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
  import MenuIcon from "@mui/icons-material/Menu";
  import { Link,Navigate } from "react-router-dom";
//   import { useDispatch, useSelector } from "react-redux";
//   import IconButton from "@mui/material/IconButton";
//   import { baseURL } from "../../constants/constant";
//   import { setUser } from "../../redux/UserSlice";
  import logo from '../../Assets/logo.png'
  const Navbar = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    // const [anchorEl, setAnchorEl] = useState(null);
  
    // const handleMenu = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };
    // const { user } = useSelector((state) => state.user);
    const pathStyle = {
      transition: "fill 0.3s",
      fill: "blue",
    };
  
    const handleMouseOver = (event) => {
      event.target.style.fill = "black";
    };
  
    const handleMouseOut = (event) => {
      event.target.style.fill = "blue";
    };
    const handleCloseDrawer = () => {
      setOpen(false);
    };
    // const handleLogout = () => {
    //   localStorage.removeItem("usertoken");
    //   dispatch(setUser(null));
    //   setAnchorEl(null);
    //   navigate("/");
    // };
    return (
      <>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", gap: 5 }}>
            <Typography
              sx={{ cursor: "pointer", ":hover": { color: "#2879fe" } }}
            >
              HOME
            </Typography>
            <Typography
              sx={{ cursor: "pointer", ":hover": { color: "#2879fe" } }}
            >
              SHOP
            </Typography>
            <Typography
              sx={{ cursor: "pointer", ":hover": { color: "#2879fe" } }}
            >
              BLOG
            </Typography>
            <Typography
              sx={{ cursor: "pointer", ":hover": { color: "#2879fe" } }}
            >
              PORTFOLIO
            </Typography>
            <Typography
              sx={{ cursor: "pointer", ":hover": { color: "#2879fe" } }}
            >
              CONTACT
            </Typography>
          </Box>
          {/* {user && user ? ( */}
            {/* <Box sx={{ display: { sm: "flex", xs: "none" } }}>
              {/* <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="black"
              >
                {/* <Avatar
                  sx={{ height: 30, width: 30 }}
                  alt={user?.name}
                  src={`${baseURL}${user?.profile}`}
                /> */}
              {/* </IconButton> */} 
              {/* <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* <MenuItem onClick={handleLogout}>Logout</MenuItem> */}
              {/* </Menu> */} 
            {/* </Box> */}
          {/* ) : ( */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {/* <Link style={{ color: "black" }} to={"/login"}> */}
                <Typography
                  sx={{ cursor: "pointer", ":hover": { color: "#2879fe" } }}
                >
                  Sign In
                </Typography>
              {/* </Link> */}
              <Typography>or</Typography>
              {/* <Link style={{ color: "black" }} to={"/signup"}> */}
                <Typography
                  sx={{ cursor: "pointer", ":hover": { color: "#2879fe" } }}
                >
                  Register
                </Typography>
              {/* </Link> */}
            </Box>
          {/* )} */}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between",alignItems:'flex-start', mt: 3 }}>
          <Box
            component="img"
            sx={{
              height: 90,
              width: 105,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="Logo"
            src={logo}
          />
          <Button
            sx={{ display: { xs: "block", sm: "block", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon sx={{ color: "#000000" }} />
          </Button>
          <Drawer anchor="left" open={open} onClose={handleCloseDrawer}>
            <Box
              role="presentation"
              onClick={handleCloseDrawer}
              onKeyDown={handleCloseDrawer}
              marginTop={4}
              marginLeft={2}
              gap={333}
              sx={{ width: 200 }}
            >
              <Typography
                sx={{
                  m: 2,
                }}
                variant="h5"
              >
                Abrar
              </Typography>
              <Typography sx={{ color: "black" }} variant="h6" margin={2}>
                Home
              </Typography>
              <Typography sx={{ color: "black" }} variant="h6" margin={2}>
                Shop
              </Typography>
              <Typography sx={{ color: "black" }} variant="h6" margin={2}>
                Blog
              </Typography>
              <Typography sx={{ color: "black" }} variant="h6" margin={2}>
                Portfolio
              </Typography>
              <Typography sx={{ color: "black" }} variant="h6" margin={2}>
                Contact
              </Typography>
              <Button
                variant="contained"
                sx={{
                  display: { xs: "block", sm: "none" },
                  backgroundColor: "#2879fe",
                  color: "white",
                  fontWeight: 600,
                  letterSpacing: 2,
                  mr: 2,
                  mb: 2,
                }}
              >
                Add Product
              </Button>
              {/* {user && user ? ( */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  {/* <Avatar
                    sx={{ height: 30, width: 30 }}
                    alt={user?.name}
                    src={`${baseURL}${user?.profile}`}
                  /> */}
                  {/* <Button
                    variant="outlined"
                    sx={{
                      transition: "all 0.7s ease",
                      ":hover": { color: "white", backgroundColor: "black" },
                    }}
                    onClick={handleLogout}
                  >
                    Log out
                  </Button> */}
                </Box>
              {/* ) : ( */}
                <Box sx={{ display: "flex", gap: 1 }}>
                  {/* <Link style={{ color: "black" }} to={"/login"}> */}
                    <Typography
                      sx={{ cursor: "pointer", ":hover": { color: "#2879fe" } }}
                    >
                      Sign In
                    </Typography>
                  {/* </Link> */}
  
                  <Typography>or</Typography>
                  {/* <Link style={{ color: "black" }} to={"/signup"}> */}
                    <Typography
                      sx={{ cursor: "pointer", ":hover": { color: "#2879fe" } }}
                    >
                      Register
                    </Typography>
                  {/* </Link> */}
                </Box>
              {/* )} */}
            </Box>
          </Drawer>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" }, gap: 6 }}>
            <Box>
              <Typography textAlign={"end"}>Call Us: +777 2345 7885</Typography>
              <Typography sx={{ color: "grey" }}>
                From 8:00 to 21:00 (Mon-Sun) Free by United States
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Badge badgeContent={"0"} color="primary">
                <Box sx={{ ":hover": { color: "red", cursor: "pointer" } }}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 21c0-.2 0-.3-.1-.5l-8.5-16c-.4-.6-1.4-.6-1.8 0l-8.5 16c-.1.2-.1.3-.1.5 0 4.9 4.3 9 9.5 9s9.5-4 9.5-9zM9.5 7.1L16.3 20H2.7L9.5 7.1zm0 20.9c-3.8 0-6.9-2.6-7.4-6h14.8c-.5 3.4-3.6 6-7.4 6zM40 21c0-.2 0-.3-.1-.5l-8.5-16c-.3-.7-1.4-.7-1.8 0l-8.5 16c-.1.2-.1.3-.1.5 0 4.9 4.3 9 9.5 9s9.5-4 9.5-9zM30.5 7.1L37.3 20H23.7l6.8-12.9zm0 20.9c-3.8 0-6.9-2.6-7.4-6h14.8c-.5 3.4-3.6 6-7.4 6zM22.8 4H27c.6 0 1-.4 1-1s-.4-1-1-1h-4.2C22.4.8 21.3 0 20 0s-2.4.8-2.8 2H13c-.6 0-1 .4-1 1s.4 1 1 1h4.2c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2zM20 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
                      fill="blue"
                      style={pathStyle}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    ></path>
                  </svg>
                </Box>
              </Badge>
  
              <Typography
                sx={{ ml: 1, ":hover": { color: "blue", cursor: "pointer" } }}
              >
                COMPARE
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Badge badgeContent={"0"} color="primary">
                <Box sx={{ ":hover": { color: "red", cursor: "pointer" } }}>
                  <svg width="31" height="28" viewBox="0 0 16 15" fill="none">
                    <path
                      d="M8.156 1.344a.62.62 0 01-.078.093L8 1.516a.621.621 0 00-.094-.079l-.062-.093a4.333 4.333 0 00-1.532-1 4.518 4.518 0 00-3.453 0 4.367 4.367 0 00-1.515 1 4.51 4.51 0 00-1 1.5A4.52 4.52 0 000 4.594c0 .614.115 1.203.344 1.765.229.552.562 1.047 1 1.485L7.64 14.14c.052.041.109.072.171.093a.417.417 0 00.188.047.417.417 0 00.188-.047.554.554 0 00.171-.093l6.297-6.297a4.55 4.55 0 001-1.485c.23-.562.344-1.15.344-1.765s-.115-1.198-.344-1.75a4.507 4.507 0 00-1-1.5 4.367 4.367 0 00-1.515-1A4.557 4.557 0 0011.406 0c-.583 0-1.161.115-1.734.344a4.367 4.367 0 00-1.516 1zm5.797 5.781L8 13.078 2.047 7.125a3.657 3.657 0 01-.781-1.156A3.63 3.63 0 011 4.594c0-.48.089-.938.266-1.375.187-.438.448-.828.78-1.172.355-.344.75-.604 1.188-.781A3.67 3.67 0 014.594 1c.458 0 .906.089 1.343.266.448.177.844.437 1.188.78.083.084.161.173.234.267.084.093.157.192.22.296.093.136.234.204.421.204.188 0 .328-.068.422-.204a2.98 2.98 0 01.203-.296 6.21 6.21 0 01.25-.266 3.503 3.503 0 011.172-.781A3.67 3.67 0 0111.407 1c.458 0 .905.089 1.343.266a3.63 3.63 0 011.203.78c.334.345.589.735.766 1.173.187.437.281.896.281 1.375s-.094.937-.281 1.375a3.448 3.448 0 01-.766 1.156z"
                      fill="blue"
                      style={pathStyle}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    ></path>
                  </svg>
                </Box>
              </Badge>
  
              <Typography
                sx={{ ml: 1, ":hover": { color: "blue", cursor: "pointer" } }}
              >
                WISHLIST
              </Typography>
            </Box>
  
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Badge badgeContent={"0"} color="primary">
                <ShoppingCartOutlinedIcon
                  sx={{
                    fontSize: 35,
                    color: "blue",
                    ":hover": { color: "black", cursor: "pointer" },
                  }}
                />
              </Badge>
  
              <Typography
                sx={{ ml: 1, ":hover": { color: "blue", cursor: "pointer" } }}
              >
                MY CART
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    );
  };
  
  export default Navbar;
  