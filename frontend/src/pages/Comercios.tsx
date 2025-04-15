import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Comercios = () => {
  const navigate = useNavigate();

  // Dados de exemplo - substituir por dados reais da API
  const comercios = [
    { id: 1, nome: 'Loja 1', endereco: 'Rua A, 123', telefone: '(11) 1234-5678' },
    { id: 2, nome: 'Loja 2', endereco: 'Rua B, 456', telefone: '(11) 8765-4321' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4">Comércios</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/comercios/novo')}
        >
          Novo Comércio
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comercios.map((comercio) => (
              <TableRow key={comercio.id}>
                <TableCell>{comercio.nome}</TableCell>
                <TableCell>{comercio.endereco}</TableCell>
                <TableCell>{comercio.telefone}</TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    onClick={() => navigate(`/comercios/${comercio.id}`)}
                    style={{ marginRight: '8px' }}
                  >
                    Detalhes
                  </Button>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => navigate(`/comercios/${comercio.id}/editar`)}
                  >
                    Editar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Comercios;
