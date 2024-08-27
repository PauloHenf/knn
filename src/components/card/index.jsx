import * as React from 'react';
import Styles from './card.module.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
//import bento from "../../../images/balamix.jpg"

export default function ActionAreaCard() {
  return (
    <div>
        {/* <img src="https://news.cgtn.com/news/3d3d414d3251444f78457a6333566d54/img/50477e823a5d4e968486ae7347d78044/50477e823a5d4e968486ae7347d78044.jpg" alt="" /> */}
      <Card sx={{maxWidth: 750}}  className={Styles.container}>
        <CardActionArea className={Styles.card}>
          <CardMedia
            component="img"
            height="200"
            image="https://acisb.com.br/wp-content/uploads/2023/12/capa-bento-cafe.webp"
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
            image="https://images.partners.gympass.com/image/filename/4457890/Ot_isg948P1RQZAzqxrEF6RkZplkEicF.png"
            alt="Imperium Alpha"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Imperium Alpha
            </Typography>
            <Typography variant="body2" color="text.primary">
            Musculação / Suplementos / 🏋🏻Treinos Personalizados
            <br/> <br/>Rua Abade Pedrosa, 184 FUNDOS - Centro<br/><br/>
            5% de desconto apresentando a carteirinha
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActionArea className={Styles.card}>
          <CardMedia
            component="img"
            height="200"
            image="https://isinaliza.vtexassets.com/arquivos/ids/186170-1200-auto?v=636983687515900000&width=1200&height=auto&aspect=true"
            alt="Em breve novos parceiros"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ----
            </Typography>
            <Typography variant="body2" color="text.primary">
            --------
            <br/> <br/>-----<br/><br/>
            -----
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
        </CardActionArea> */}
      </Card>
    </div>
  );
}
