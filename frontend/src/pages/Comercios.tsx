import axios from 'axios';
import { useEffect, useState } from 'react';
import CommerceCard from '../components/CommerceCard';
import "../styles/CommerceList.css";
import { Comercio } from '../types/Comercio';

const Comercios = () => {
  const [comercios, setComercios] = useState<Comercio[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchComercios = async () => {
      const response = await axios.get<Comercio[]>('http://localhost:8080/api/comercios');
      try {
        setComercios(response.data);
      } catch (error) {
        console.error('Erro ao buscar comércios:', error);
      } finally {
        setLoading(false)
      }
    };

    fetchComercios();
  }, []);

  if (loading) {
    return <div className="loading">Carregando...</div>
  }

  return (
    <main className="commerce-list-container">
      <h1 className="commerce-list-title">CanesFood</h1>

      {comercios.length === 0 ? (
        <div className="no-commerces">
          <p>Nenhum comércio encontrado na região.</p>
        </div>
      ) : (
        <div className="commerce-grid">
          {comercios.map((comercio) => (
            <CommerceCard key={comercio.id} commerce={comercio} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Comercios;
