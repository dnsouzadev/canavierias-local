import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const EditarComercio = () => {
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você implementaria a lógica para salvar as alterações
    navigate(`/comercios/${id}`);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Editar Comércio</Typography>
      </Box>

      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              <Box sx={{ flex: '1 1 300px' }}>
                <TextField
                  fullWidth
                  label="Nome"
                  defaultValue={comercio.nome}
                  margin="normal"
                  required
                />
              </Box>

              <Box sx={{ flex: '1 1 300px' }}>
                <TextField
                  fullWidth
                  label="CNPJ"
                  defaultValue={comercio.cnpj}
                  margin="normal"
                  required
                />
              </Box>

              <Box sx={{ flex: '1 1 100%' }}>
                <TextField
                  fullWidth
                  label="Endereço"
                  defaultValue={comercio.endereco}
                  margin="normal"
                  required
                />
              </Box>

              <Box sx={{ flex: '1 1 300px' }}>
                <TextField
                  fullWidth
                  label="Telefone"
                  defaultValue={comercio.telefone}
                  margin="normal"
                  required
                />
              </Box>

              <Box sx={{ flex: '1 1 300px' }}>
                <TextField
                  fullWidth
                  label="Email"
                  defaultValue={comercio.email}
                  margin="normal"
                  required
                  type="email"
                />
              </Box>

              <Box sx={{ flex: '1 1 100%' }}>
                <TextField
                  fullWidth
                  label="Descrição"
                  defaultValue={comercio.descricao}
                  margin="normal"
                  multiline
                  rows={4}
                />
              </Box>
            </Box>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button
                variant="outlined"
                onClick={() => navigate(`/comercios/${id}`)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Salvar
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditarComercio;
