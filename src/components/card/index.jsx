import * as React from 'react';
import Styles from './card.module.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import bento from './images/balamix.jpg'

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className={Styles.container}>
      <CardActionArea className={Styles.card}>
        <CardMedia
          component="img"
          height="200"
          image="./images/balamix.jpg"
          alt="O Bento Café"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            O Bento Café - Café e Arte
          </Typography>
          <Typography variant="body2" color="text.primary">
          Traz o real sabor do café. Lugar incrível, calmo, acolhedor igual à casa da vovó!
          <br/> <br/>Av. Sebastiao Ferreira dos Santos, 217<br/><br/>
          10% de desconto apresentando a carteirinha
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActionArea className={Styles.card}>
        <CardMedia
          component="img"
          height="200"
          image="./images/balamix.jpg"
          alt="O Bento Café"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            O Bento Café - Café e Arte
          </Typography>
          <Typography variant="body2" color="text.primary">
          Traz o real sabor do café. Lugar incrível, calmo, acolhedor igual à casa da vovó!
          <br/> <br/>Av. Sebastiao Ferreira dos Santos, 217<br/><br/>
          10% de desconto apresentando a carteirinha
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea className={Styles.card}>
        <CardMedia
          component="img"
          height="200"
          image="./images/balamix.jpg"
          alt="O Bento Café"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            O Bento Café - Café e Arte
          </Typography>
          <Typography variant="body2" color="text.primary">
          Traz o real sabor do café. Lugar incrível, calmo, acolhedor igual à casa da vovó!
          <br/> <br/>Av. Sebastiao Ferreira dos Santos, 217<br/><br/>
          10% de desconto apresentando a carteirinha
          </Typography>
        </CardContent>
      </CardActionArea> */}
    </Card>
  );
}
