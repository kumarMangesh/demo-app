import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard({ data, handleAddFavourites }) {

  const {
    imageUrl,
    name,
    favourite,
  } = data;

  const [isFavourite, setIsFavourite] = useState(favourite);

  useEffect(() => {
    setIsFavourite(favourite)
  }, [data, favourite])

  return (
    <>
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
            onClick={() => handleAddFavourites(data)}
            size="small">
            {!isFavourite ? "Add to favourite" : "In Favourites"}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
