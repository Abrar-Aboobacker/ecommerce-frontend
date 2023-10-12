import { Box,} from "@mui/material";
import React from "react";
import BannerCard1 from "../card/BannerCard1";
import Banner1bg from "../../Assets/Banner1.jpg";
import BannerCard2 from "../card/BannerCard2";
import banner2bg from "../../Assets/Banner2.jpg";

const Banner = () => {
    
  return (
    <>
      <Box sx={{ mt: 2 }}>
        
        <Box sx={{ display:{xs:'block',sm:'block',md:"flex"}, justifyContent: "space-around", gap: 5 }}>
          <Box sx={{ mt: 2 }}>
            <BannerCard1 bg={Banner1bg} />
          </Box>
          <Box sx={{ mt: 2 }}>
            <BannerCard2 bg={banner2bg} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
