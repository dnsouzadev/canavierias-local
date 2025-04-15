import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import Comercios from './pages/Comercios';
import ContactPage from './pages/ContactPage';
import DetalhesComercio from './pages/DetalhesComercio';
import EditCommercePage from './pages/EditCommercePage';
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
              <Route path="/" element={<Comercios />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/comercios" element={<Comercios />} />
              <Route path="/comercio/:id" element={<DetalhesComercio />} />
              <Route path="/editar" element={<EditCommercePage />} />
              <Route path="/cadastrar" element={<RegisterCommercePage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
