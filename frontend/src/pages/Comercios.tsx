import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Comercio } from '../types/Comercio';

const Comercios = () => {
  const navigate = useNavigate();
  const [comercios, setComercios] = useState<Comercio[]>([]);

  useEffect(() => {
    const fetchComercios = async () => {
      const response = await axios.get<Comercio[]>('http://localhost:8080/api/comercios');
      try {
        setComercios(response.data);
      } catch (error) {
        console.error('Erro ao buscar comércios:', error);
      }
    };

    fetchComercios();
  }, []);


  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
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
              <TableCell>Tipo</TableCell>
              <TableCell>Taxa de Entrega</TableCell>
              <TableCell>Horário</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comercios.map((comercio) => (
              <TableRow key={comercio.id}>
                <TableCell>{comercio.nome}</TableCell>
                <TableCell>{comercio.endereco}</TableCell>
                <TableCell>{comercio.telefone}</TableCell>
                <TableCell>{comercio.tipoComercio}</TableCell>
                <TableCell>R${comercio.taxaEntrega}</TableCell>
                <TableCell>{comercio.horarioFuncionamento}</TableCell>
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
}

export default Comercios;
