import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSize, setProductInfo } from './../redux/cartSlice';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AddToCart(props) {
  const [clickedButton, setClickedButton] = React.useState(null);
  const selectedSize = useSelector((state) => state.cart.selectedSize);

  const dispatch = useDispatch();

  const [sizeNae, setSizeNae] = useState()


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <Typography variant="body2" align="left" sx={{color:"#888888",                    marginBottom: '1em'}}>
            SIZE<span style={{color: "#C90000"}}>*</span><span style={{color: "#222222"}}><strong>{' '+sizeNae}</strong></span>
          </Typography>
      <div>
        {Array.isArray(props.Size.sizeOptions) ? (
          props.Size.sizeOptions.map((item, index) => {
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
                onClick={() => {
                  setClickedButton(index);
                  dispatch(setSize(item.label));
                  setSizeNae(item.label)
                }}
              >
                {item.label}
              </Button>
            );
          })
        ) : (
          <p>Invalid sizeOptions data</p>
        )}
      </div>
      <div>
        <Button
          sx={{ color: "#222222", border: "2px solid black", borderRadius: "0", marginLeft: '0.5em' }}
          onClick={() => {
            if (!selectedSize) {
              window.alert('Must select a size before adding to cart.');
            } else {
              dispatch(setProductInfo({
                size: selectedSize,
                title: props.Size.title,
                price: props.Size.price,
                pic: props.Size.pic,
              }));
            }
          }}
        >
          ADD TO CART
        </Button>
      </div>
    </Box>
  );
}
