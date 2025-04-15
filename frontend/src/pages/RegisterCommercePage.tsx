"use client"

import axios from "axios"
import type React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft } from "../components/Icons"
import "../styles/CommerceForm.css"
import type { ItemCardapio } from "../types/ItemCardapio"

// Function to generate a random access code
const generateAccessCode = (): string => {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

const RegisterCommercePage: React.FC = () => {
  const navigate = useNavigate()

  // States
  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    telefone: "",
    endereco: "",
    taxaEntrega: 0,
    horarioFuncionamento: "",
    tipoComercio: "",
    fotoUrl: "",
    codigoAcesso: generateAccessCode(),
  })
  const [menuItems, setMenuItems] = useState<ItemCardapio[]>([
    {
      nome: "",
      descricao: "",
      preco: 0,
      fotoUrl: "",
    },
  ])
  const [error, setError] = useState("")
  const [saving, setSaving] = useState(false)
  const [showAccessCode, setShowAccessCode] = useState(false)

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name === "taxaEntrega") {
      setFormData({
        ...formData,
        [name]: Number.parseFloat(value) || 0,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  // Handle menu item changes
  const handleMenuItemChange = (index: number, field: keyof ItemCardapio, value: string | number) => {
    const updatedItems = [...menuItems]

    if (field === "preco") {
      updatedItems[index] = {
        ...updatedItems[index],
        [field]: Number.parseFloat(value as string) || 0,
      }
    } else {
      updatedItems[index] = {
        ...updatedItems[index],
        [field]: value,
      }
    }

    setMenuItems(updatedItems)
  }

  // Add new menu item
  const handleAddMenuItem = () => {
    setMenuItems([
      ...menuItems,
      {
        nome: "",
        descricao: "",
        preco: 0,
        fotoUrl: "",
      },
    ])
  }

  // Remove menu item
  const handleRemoveMenuItem = (index: number) => {
    const updatedItems = [...menuItems]
    updatedItems.splice(index, 1)
    setMenuItems(updatedItems)
  }

  // Generate new access code
  const handleRegenerateAccessCode = () => {
    setFormData({
      ...formData,
      codigoAcesso: generateAccessCode(),
    })
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      // In a real application, you would send this data to your API
      const newCommerce = {
        ...formData,
        cardapio: menuItems,
      }

      console.log("New commerce data:", newCommerce)

      // Simulate API call
      await axios.post('http://localhost:8080/api/comercios', newCommerce)

      setShowAccessCode(true)
    } catch (error) {
      setError("Erro ao cadastrar o comércio")
      setSaving(false)
    }
  }

  // If registration is successful, show the access code
  if (showAccessCode) {
    return (
      <main className="commerce-form-container">
        <div className="success-container">
          <h1>Cadastro Realizado com Sucesso!</h1>

          <div className="access-code-display">
            <h2>Seu Código de Acesso</h2>
            <p className="access-code">{formData.codigoAcesso}</p>
            <p className="access-code-warning">
              <strong>IMPORTANTE:</strong> Guarde este código com segurança. Você precisará dele para editar as
              informações do seu comércio.
            </p>
          </div>

          <div className="success-actions">
            <button className="primary-button" onClick={() => navigate("/comercios")}>
              Ir para Lista de Comércios
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="commerce-form-container">
      <div className="back-navigation">
        <Link to="/comercios" className="back-link">
          <ArrowLeft /> Voltar para lista
        </Link>
      </div>

      <h1 className="form-title">Cadastrar Novo Comércio</h1>

      <form onSubmit={handleSubmit} className="commerce-form">
        {error && <div className="form-error">{error}</div>}

        <div className="form-section">
          <h2 className="section-title">Informações Básicas</h2>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="nome">Nome do Comércio*</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
                placeholder="Nome do seu estabelecimento"
              />
            </div>

            <div className="form-group">
              <label htmlFor="tipoComercio">Tipo de Comércio*</label>
              <select
                id="tipoComercio"
                name="tipoComercio"
                value={formData.tipoComercio}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecione o tipo</option>
                <option value="Restaurante">Restaurante</option>
                <option value="Padaria">Padaria</option>
                <option value="Mercado">Mercado</option>
                <option value="Lanchonete">Lanchonete</option>
                <option value="Café">Café</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="descricao">Descrição*</label>
              <textarea
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleInputChange}
                required
                placeholder="Descreva seu estabelecimento"
                rows={3}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone*</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                required
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="taxaEntrega">Taxa de Entrega (R$)*</label>
              <input
                type="number"
                id="taxaEntrega"
                name="taxaEntrega"
                value={formData.taxaEntrega}
                onChange={handleInputChange}
                required
                min="0"
                step="0.01"
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="endereco">Endereço*</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
                required
                placeholder="Endereço completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="horarioFuncionamento">Horário de Funcionamento*</label>
              <input
                type="text"
                id="horarioFuncionamento"
                name="horarioFuncionamento"
                value={formData.horarioFuncionamento}
                onChange={handleInputChange}
                required
                placeholder="Ex: Seg-Sex: 9h-18h, Sáb: 9h-13h"
              />
            </div>

            <div className="form-group">
              <label htmlFor="fotoUrl">URL da Foto</label>
              <input
                type="url"
                id="fotoUrl"
                name="fotoUrl"
                value={formData.fotoUrl}
                onChange={handleInputChange}
                placeholder="https://exemplo.com/foto.jpg"
              />
            </div>

            <div className="form-group full-width access-code-group">
              <div className="access-code-header">
                <label htmlFor="codigoAcesso">Código de Acesso</label>
                <button type="button" className="regenerate-button" onClick={handleRegenerateAccessCode}>
                  Gerar Novo
                </button>
              </div>
              <input type="text" id="codigoAcesso" name="codigoAcesso" value={formData.codigoAcesso} readOnly />
              <p className="access-code-info">
                Este é o código que você usará para editar seu comércio no futuro. Guarde-o com segurança.
              </p>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Cardápio</h2>
          <p className="section-description">Adicione os itens do seu cardápio</p>

          {menuItems.map((item, index) => (
            <div key={index} className="menu-item-form">
              <h3>Item {index + 1}</h3>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor={`item-nome-${index}`}>Nome do Item*</label>
                  <input
                    type="text"
                    id={`item-nome-${index}`}
                    value={item.nome}
                    onChange={(e) => handleMenuItemChange(index, "nome", e.target.value)}
                    required
                    placeholder="Nome do item"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor={`item-preco-${index}`}>Preço (R$)*</label>
                  <input
                    type="number"
                    id={`item-preco-${index}`}
                    value={item.preco}
                    onChange={(e) => handleMenuItemChange(index, "preco", e.target.value)}
                    required
                    min="0"
                    step="0.01"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor={`item-descricao-${index}`}>Descrição</label>
                  <input
                    type="text"
                    id={`item-descricao-${index}`}
                    value={item.descricao}
                    onChange={(e) => handleMenuItemChange(index, "descricao", e.target.value)}
                    placeholder="Descrição do item"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor={`item-foto-${index}`}>URL da Foto</label>
                  <input
                    type="url"
                    id={`item-foto-${index}`}
                    value={item.fotoUrl}
                    onChange={(e) => handleMenuItemChange(index, "fotoUrl", e.target.value)}
                    placeholder="https://exemplo.com/foto.jpg"
                  />
                </div>
              </div>

              {menuItems.length > 1 && (
                <button type="button" className="remove-button" onClick={() => handleRemoveMenuItem(index)}>
                  Remover Item
                </button>
              )}
            </div>
          ))}

          <button type="button" className="add-button" onClick={handleAddMenuItem}>
            + Adicionar Item ao Cardápio
          </button>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button" disabled={saving}>
            {saving ? "Cadastrando..." : "Cadastrar Comércio"}
          </button>
        </div>
      </form>
    </main>
  )
}

export default RegisterCommercePage
