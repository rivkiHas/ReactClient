import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { useDispatch } from 'react-redux';

export default function ProductListItem({ one }) {
  let dispatch = useDispatch();
 
  return (
    <Card variant="outlined" sx={{ width: 300, borderRadius: 0 , borderColor:'black', backgroundColor:'white'}} >
      <AspectRatio ratio="0.9" >
        <img
          src={one.productImg}
          alt=""
        />
      </AspectRatio>
      <CardContent sx={{ padding: '16px', marginTop: '-8px' }}>
        <Typography component="div" level="title-md"><a href="#" style={{textDecoration: 'none', color: 'inherit'}}>{one.productName}</a></Typography>
        <Typography component="div" level="body-sm">&#8362; {one.price}</Typography>
      </CardContent>
    </Card>
  );
}

