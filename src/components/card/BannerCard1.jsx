import { Box, Button, Typography } from "@mui/material";
import React from "react";
const BannerCard1 = (props) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${props.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: {xs:'99%',sm:'90%',md:"650px"},
          height: "450px",
        }}
      >
        <Typography sx={{ ml: {xs:2,sm:8}, pt: 20, fontSize: 20 }}>
          SUMMER 2021
        </Typography>
        <Typography sx={{ml: {xs:2,sm:8}, fontSize: 35 }}>NEW ARRIVALS</Typography>
        <Button
          sx={{ ml: {xs:2,sm:8}, backgroundColor: "#2879fe", px: 5, py: 1 }}
          variant="contained"
        >
          {" "}
          Discover Now
        </Button>
      </Box>
    </>
  );
};

export default BannerCard1;
