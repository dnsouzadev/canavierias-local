import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Comercios from './pages/Comercios';
import DetalhesComercio from './pages/DetalhesComercio';
import EditCommercePage from './pages/EditCommercePage';
import Home from './pages/Home';
import RegisterCommercePage from './pages/RegisterCommercePage';
import theme from './theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/comercios" element={<Comercios />} />
              <Route path="/comercio/novo" element={<RegisterCommercePage />} />
              <Route path="/comercio/:id" element={<DetalhesComercio />} />
              <Route path="/comercio/editar" element={<EditCommercePage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
