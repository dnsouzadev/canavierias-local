import type React from "react"
import type { ItemCardapio } from "../types/ItemCardapio"

interface MenuItemCardProps {
  item: ItemCardapio
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="menu-item-card">
      <div className="menu-item-image">
        <img src={item.fotoUrl || "/placeholder.svg"} alt={item.nome} />
      </div>
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-title">{item.nome}</h3>
          <span className="menu-item-price">R$ {item.preco.toFixed(2)}</span>
        </div>
        <p className="menu-item-description">{item.descricao}</p>
      </div>
    </div>
  )
}

export default MenuItemCard
