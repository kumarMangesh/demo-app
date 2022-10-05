import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FavouritesMediaCard({data, handleRemovefavourite }) {
const {
    imageUrl,
    name,
} = data;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">

        </Typography>
      </CardContent>
      <CardActions>
        <Button
         size="small"
         onClick={() => handleRemovefavourite(data)}
         >Remove from favourites</Button>
      </CardActions>
    </Card>
  );
}
