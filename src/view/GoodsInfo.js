import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import axios from 'axios'
import AddToCart from './AddToCart';



export default function GoodsInfo() {

  useEffect(() => {
    axios.get('https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product').then((res)=>{
      setGoodsDetail(res.data)
    })

  },[])
  
  const [goodsDetail, setGoodsDetail] = useState({})


  return (
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{marginTop:'1em'}}>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            src="/classic-tee.jpg"
            sx={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', mx: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>

          <Typography variant="h6" align="left" gutterBottom sx={{ color: '#222222' }}>
            {goodsDetail.title}
          </Typography>

          <Typography variant="body1" align="left" gutterBottom sx={{ color: '#222222',borderTop: '0.5px solid #888888', borderBottom: '0.5px solid #888888' }}>
            {"$"+goodsDetail.price}
          </Typography>

          <Typography variant="body2" align="left" sx={{color:'#888888'}}>
            {goodsDetail.description}
          </Typography>

          <Typography variant="body2" align="left" sx={{color:'#888888'}}>
            {'SIZE'}
          </Typography>

          <AddToCart  ProductSiz={goodsDetail.sizeOptions}/>

        </Grid>
      </Grid>
  )
}
