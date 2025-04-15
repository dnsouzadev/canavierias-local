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
          backgroundColor: 'background.default',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <StorefrontIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom>
          Bem-vindo ao Local Commerce
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Descubra os melhores comércios locais e apoie os negócios da sua região.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/comercios')}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              backgroundColor: 'primary.main',
              '&:hover': { backgroundColor: 'primary.dark' },
            }}
          >
            Explorar Comércios
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4} sx={{ mt: 6 }}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              borderRadius: 2,
              backgroundColor: 'background.paper',
              boxShadow: 2,
            }}
          >
            <Typography variant="h5" gutterBottom>
              Encontre
            </Typography>
            <Typography color="text.secondary">
              Descubra comércios locais próximos a você.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              borderRadius: 2,
              backgroundColor: 'background.paper',
              boxShadow: 2,
            }}
          >
            <Typography variant="h5" gutterBottom>
              Explore
            </Typography>
            <Typography color="text.secondary">
              Conheça detalhes sobre cada estabelecimento.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              borderRadius: 2,
              backgroundColor: 'background.paper',
              boxShadow: 2,
            }}
          >
            <Typography variant="h5" gutterBottom>
              Conecte
            </Typography>
            <Typography color="text.secondary">
              Apoie o comércio local e fortaleça sua comunidade.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
