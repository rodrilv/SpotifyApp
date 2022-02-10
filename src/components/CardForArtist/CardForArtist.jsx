import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({artist, image, alt}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={image}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {artist}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}