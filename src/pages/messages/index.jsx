import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import TableHead from '@mui/material/TableHead';

export default function Messages() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(1);
  const [messages, setMessages] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  async function fetchMessages() {
    const { data } = await axios.get('/api/get-all-messages');

    setMessages(data.messages);
  }

  React.useEffect(() => {
    fetchMessages();
  }, []);
  return (
    <Paper sx={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ height: '100vh' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Idade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.map((message) => {
              return (
                <TableRow key={message.id}>
                  <TableCell>{message.name}</TableCell>
                  <TableCell>{message.phone}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell>{message.age}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[1, 10, 25, 50]}
        component="div"
        count={messages.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}
