import { Box, Typography } from "@mui/material";
import React from "react";

const BannerCard2 = (props) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${props.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: {xs:'99%',sm:"90%",md:"300px"},
          height: "450px",
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            opacity: 0.8,
            width: "80%",
            height: "154px",
            transition: ".5s",
            mb: 5,
            ":hover": { backgroundColor: "#2879fe", color: "white" },
          }}
        >
          <Typography sx={{ textAlign: "center", fontSize: 22, pt: 2 }}>
            TOP VIEW IN THIS WEEK
          </Typography>
          <Typography sx={{ textAlign: "center", fontSize: 28 }}>
            TRENDING
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default BannerCard2;
