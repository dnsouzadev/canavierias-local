import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const DetalhesComercio = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dados de exemplo - substituir por dados reais da API
  const comercio = {
    id: 1,
    nome: 'Loja 1',
    endereco: 'Rua A, 123',
    telefone: '(11) 1234-5678',
    email: 'loja1@email.com',
    cnpj: '12.345.678/0001-90',
    descricao: 'Uma loja de roupas e acessórios'
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Detalhes do Comércio</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`/comercios/${id}/editar`)}
        >
          Editar
        </Button>
      </Box>

      <Card>
        <CardContent>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Informações Básicas
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            <Box sx={{ flex: '1 1 300px' }}>
              <Typography variant="subtitle2" color="text.secondary">
                Nome
              </Typography>
              <Typography variant="body1">{comercio.nome}</Typography>
            </Box>

            <Box sx={{ flex: '1 1 300px' }}>
              <Typography variant="subtitle2" color="text.secondary">
                CNPJ
              </Typography>
              <Typography variant="body1">{comercio.cnpj}</Typography>
            </Box>

            <Box sx={{ flex: '1 1 100%' }}>
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
                Email
              </Typography>
              <Typography variant="body1">{comercio.email}</Typography>
            </Box>

            <Box sx={{ flex: '1 1 100%' }}>
              <Typography variant="subtitle2" color="text.secondary">
                Descrição
              </Typography>
              <Typography variant="body1">{comercio.descricao}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

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
