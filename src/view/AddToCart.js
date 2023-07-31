import Button from '@mui/material/Button'
import React, { useState } from 'react'
import Box from '@mui/material/Box';

export default function AddToCart(props) {

  const [clickedButton, setClickedButton] = useState(null);

  return (
   
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div>
          {props.Size.map((item,index) => {
            return (
              <Button
                key={index}
                sx={{
                  width: "50px",
                  height: "50px",
                  marginLeft: "0.5em",
                  border: clickedButton === index ? "2px solid #222222" : "1px solid #CCCCCC",
                  borderRadius: "0",
                  color: "#888888",
                  marginBottom: '1em'
                }}
                onClick={() => setClickedButton(index)}
              >
                {item.label}
              </Button>
            )
          })}
        </div>
        <div>
          <Button sx={{color:"#222222",border:"2px solid black", borderRadius: "0",marginLeft:'0.5em'}}>
            ADD TO CART
          </Button>
        </div>
      </Box>

  )
}
