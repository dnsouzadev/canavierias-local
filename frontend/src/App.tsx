import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Comercios from './pages/Comercios';
import DetalhesComercio from './pages/DetalhesComercio';
import EditarComercio from './pages/EditarComercio';
import Home from './pages/Home';
import NovoComercio from './pages/NovoComercio';
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
              <Route path="/comercios/novo" element={<NovoComercio />} />
              <Route path="/comercios/:id" element={<DetalhesComercio />} />
              <Route path="/comercios/:id/editar" element={<EditarComercio />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
