import type React from "react"
import { Link } from "react-router-dom"
import type { Comercio } from "../types/Comercio"
import { Phone, Store } from "./Icons"

interface CommerceCardProps {
  commerce: Comercio
}

const CommerceCard: React.FC<CommerceCardProps> = ({ commerce }) => {
  return (
    <Link to={`/comercio/${commerce.id}`} className="card-link">
      <div className="commerce-card">
        <div className="commerce-image">
          <img src={commerce.fotoUrl || "/placeholder.svg"} alt={commerce.nome} />
        </div>
        <div className="commerce-content">
          <div className="commerce-header">
            <h2 className="commerce-title">{commerce.nome}</h2>
            <span className="commerce-badge">{commerce.tipoComercio}</span>
          </div>
          <p className="commerce-description">{commerce.descricao}</p>
          <div className="commerce-info">
            <div className="commerce-address">
              <Store />
              <span>{commerce.endereco}</span>
            </div>
            <div className="commerce-phone">
              <Phone />
              <span>{commerce.telefone}</span>
            </div>
          </div>
        </div>
        <div className="commerce-footer">
          <div className="commerce-details">
            <span className="commerce-delivery">Taxa de entrega: R$ {commerce.taxaEntrega.toFixed(2)}</span>
            <span className="commerce-hours">{commerce.horarioFuncionamento}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CommerceCard
