import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Box } from '@mui/material'
import Banner from '../components/banner/Banner'
import ProductListing from '../components/ProductListing/ProductListing'

const HomePage = () => {
  return (
    <>
    <Box  sx={{mt:2,ml:'8%',mr:'8%'}}>
     <Navbar/> 
     <Banner/>
     <ProductListing/>
    </Box>
    </>
  )
}

export default HomePage
