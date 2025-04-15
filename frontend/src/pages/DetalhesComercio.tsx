import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Phone } from '../components/Icons';
import MenuItemCard from '../components/MenuItemCard';
import "../styles/CommerceDetail.css";
import { Comercio } from '../types/Comercio';

const DetalhesComercio = () => {
  const { id } = useParams<{ id: string }>()
  const [commerce, setCommerce] = useState<Comercio | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchCommerce = async () => {
      try {
        if (id) {
          const response = await axios.get(`http://localhost:8080/api/comercios/${id}`)
          if (response.status === 200) {
            setCommerce(response.data)
          }
        }
      } catch (error) {
        console.error("Error fetching commerce details:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCommerce()
  }, [id])

  if (!commerce) {
    return (
      <div className="not-found">
        <h2>Comércio não encontrado</h2>
        <Link to="/" className="back-link">
          <ArrowLeft /> Voltar para lista
        </Link>
      </div>
    )
  }

  return (
    <main className="commerce-detail-container">
      <div className="back-navigation">
        <Link to="/" className="back-link">
          <ArrowLeft /> Voltar para lista
        </Link>
      </div>

      <div className="commerce-detail-grid">
        <div className="commerce-detail-main">
          <div className="commerce-detail-image">
            <img src={commerce.fotoUrl || "/placeholder.svg"} alt={commerce.nome} />
          </div>

          <div className="commerce-detail-info">
            <div className="commerce-detail-header">
              <div>
                <h1 className="commerce-detail-title">{commerce.nome}</h1>
                <span className="commerce-detail-badge">{commerce.tipoComercio}</span>
              </div>
              <div className="commerce-detail-delivery">
                <p>Taxa de entrega</p>
                <p className="commerce-detail-price">R$ {commerce.taxaEntrega.toFixed(2)}</p>
              </div>
            </div>

            <p className="commerce-detail-description">{commerce.descricao}</p>

            <div className="commerce-detail-contact">
              <div className="contact-item">
                <Phone />
                <span>{commerce.telefone}</span>
              </div>
              <div className="contact-item">
                <MapPin />
                <span>{commerce.endereco}</span>
              </div>
              <div className="contact-item">
                <Clock />
                <span>{commerce.horarioFuncionamento}</span>
              </div>
            </div>
          </div>

          <div className="commerce-menu">
            <h2 className="menu-title">Cardápio</h2>
            <div className="menu-grid">
              {commerce.cardapio.map((item, index) => (
                <MenuItemCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="commerce-detail-sidebar">
          <div className="contact-card">
            <h2 className="contact-card-title">Informações de Contato</h2>
            <div className="contact-card-separator"></div>

            <div className="contact-card-info">
              <div className="contact-card-item">
                <p className="contact-card-label">Telefone</p>
                <p className="contact-card-value">{commerce.telefone}</p>
              </div>

              <div className="contact-card-item">
                <p className="contact-card-label">Endereço</p>
                <p className="contact-card-value">{commerce.endereco}</p>
              </div>

              <div className="contact-card-item">
                <p className="contact-card-label">Horário de Funcionamento</p>
                <p className="contact-card-value">{commerce.horarioFuncionamento}</p>
              </div>

              <div className="contact-card-item">
                <p className="contact-card-label">Tipo de Comércio</p>
                <p className="contact-card-value">{commerce.tipoComercio}</p>
              </div>
            </div>

            <div className="contact-card-separator"></div>

            <button className="contact-button">Entrar em Contato</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DetalhesComercio;
