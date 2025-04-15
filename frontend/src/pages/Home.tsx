import StorefrontIcon from '@mui/icons-material/Storefront';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          py: 8,
        }}
      >
        <StorefrontIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h2" component="h1" gutterBottom>
          Bem-vindo ao Local Commerce
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Descubra e explore os melhores comércios locais da sua região
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/comercios')}
            sx={{ mr: 2 }}
          >
            Explorar Comércios
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/comercios/novo')}
          >
            Cadastrar Comércio
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Encontre
            </Typography>
            <Typography color="text.secondary">
              Descubra comércios locais próximos a você
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Explore
            </Typography>
            <Typography color="text.secondary">
              Conheça detalhes sobre cada estabelecimento
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Conecte
            </Typography>
            <Typography color="text.secondary">
              Apoie o comércio local da sua região
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
