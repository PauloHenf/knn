import Styles from "./benefitsCard.module.scss";
import Header from "../../../src/components/header";
import Image from "next/image";
import Table from '@mui/material/Table';
import { TableHead } from "@mui/material";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import bentoCafe from "../../../images/bentocafe.webp";
import Card from "../../components/card";

const BenefitsCard= () => {
  return (
    <div >
      <Header></Header>
      <h1 className={Styles.text}>Benefícios exclusivos para alunos e funcionários KNN:</h1>
      <div className={Styles.container}>
      <Card></Card>

      </div>
     </div>
  );
};
/*<TableContainer sx={{ height: '100vh' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Nome do Estabelecimento</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell>Contato</TableCell>
              <TableCell>Benefício</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                  <TableRow><TableCell> <Image src={bentoCafe} alt="Bento Café logo" width={200} height={200} /> </TableCell>
                  <TableCell>O Bento - Café e Arte</TableCell>
                  <TableCell>Traz o real sabor do café! Lugar incrível, calmo, acolhedor igual à casa da vovó</TableCell>
                  <TableCell>Av. Sebastiao Ferreira dos Santos, 217</TableCell>
                  <TableCell>Instagram</TableCell>
                  <TableCell>10% de desconto apresentando a carteirinha</TableCell>
                </TableRow>
          </TableBody>
        </Table>
      </TableContainer>*/ 
export default BenefitsCard;
