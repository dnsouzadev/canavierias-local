import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NovoComercio = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você implementaria a lógica para criar um novo comércio
    navigate('/comercios');
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Novo Comércio</Typography>
      </Box>

      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              <Box sx={{ flex: '1 1 300px' }}>
                <TextField
                  fullWidth
                  label="Nome"
                  margin="normal"
                  required
                />
              </Box>

              <Box sx={{ flex: '1 1 300px' }}>
                <TextField
                  fullWidth
                  label="CNPJ"
                  margin="normal"
                  required
                />
              </Box>

              <Box sx={{ flex: '1 1 100%' }}>
                <TextField
                  fullWidth
                  label="Endereço"
                  margin="normal"
                  required
                />
              </Box>

              <Box sx={{ flex: '1 1 300px' }}>
                <TextField
                  fullWidth
                  label="Telefone"
                  margin="normal"
                  required
                />
              </Box>

              <Box sx={{ flex: '1 1 300px' }}>
                <TextField
                  fullWidth
                  label="Email"
                  margin="normal"
                  required
                  type="email"
                />
              </Box>

              <Box sx={{ flex: '1 1 100%' }}>
                <TextField
                  fullWidth
                  label="Descrição"
                  margin="normal"
                  multiline
                  rows={4}
                />
              </Box>
            </Box>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button
                variant="outlined"
                onClick={() => navigate('/comercios')}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Criar
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NovoComercio;
