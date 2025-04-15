import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DetalhesComercio = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comercio, setComercio] = useState<any>(null);

  useEffect(() => {
    const fetchComercio = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/comercios/${id}`);
        setComercio(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do comércio:', error);
      }
    };

    fetchComercio();
  }, [id]);

  if (!comercio) {
    return <Typography>Carregando...</Typography>;
  }

  return (
    <div>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4">{comercio.nome}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {comercio.descricao}
        </Typography>
      </Box>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Informações Básicas
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            <Box sx={{ flex: '1 1 300px' }}>
              <Typography variant="subtitle2" color="text.secondary">
                Endereço
              </Typography>
              <Typography variant="body1">{comercio.endereco}</Typography>
            </Box>

            <Box sx={{ flex: '1 1 300px' }}>
              <Typography variant="subtitle2" color="text.secondary">
                Telefone
              </Typography>
              <Typography variant="body1">{comercio.telefone}</Typography>
            </Box>

            <Box sx={{ flex: '1 1 300px' }}>
              <Typography variant="subtitle2" color="text.secondary">
                Tipo de Comércio
              </Typography>
              <Typography variant="body1">{comercio.tipoComercio}</Typography>
            </Box>

            <Box sx={{ flex: '1 1 300px' }}>
              <Typography variant="subtitle2" color="text.secondary">
                Taxa de Entrega
              </Typography>
              <Typography variant="body1">R${comercio.taxaEntrega}</Typography>
            </Box>

            <Box sx={{ flex: '1 1 300px' }}>
              <Typography variant="subtitle2" color="text.secondary">
                Horário de Funcionamento
              </Typography>
              <Typography variant="body1">{comercio.horarioFuncionamento}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Cardápio
        </Typography>
        <Grid container spacing={3}>
          {comercio.cardapio.map((item: any, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.fotoUrl}
                  alt={item.nome}
                />
                <CardContent>
                  <Typography variant="h6">{item.nome}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.descricao}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    R${item.preco}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="outlined"
          onClick={() => navigate('/comercios')}
          sx={{ mr: 1 }}
        >
          Voltar
        </Button>
      </Box>
    </div>
  );
};

export default DetalhesComercio;
