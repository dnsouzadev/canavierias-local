"use client"

import axios from "axios"
import type React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft } from "../components/Icons"
import "../styles/CommerceForm.css"
import type { Comercio } from "../types/Comercio"
import type { ItemCardapio } from "../types/ItemCardapio"


const EditCommercePage: React.FC = () => {
  const navigate = useNavigate()

  // States
  const [accessCode, setAccessCode] = useState("")
  const [commerce, setCommerce] = useState<Comercio | null>(null)
  const [isVerifying, setIsVerifying] = useState(true)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState<Omit<Comercio, "id" | "cardapio">>({
    nome: "",
    descricao: "",
    telefone: "",
    endereco: "",
    taxaEntrega: 0,
    horarioFuncionamento: "",
    tipoComercio: "",
    fotoUrl: "",
    codigoAcesso: "",
  })
  const [menuItems, setMenuItems] = useState<ItemCardapio[]>([])
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)

  // Verify access code and find matching commerce
  const handleVerifyAccessCode = async () => {
    if (!accessCode.trim()) {
      setError("Por favor, digite o código de acesso")
      return
    }

    setLoading(true)
    setError("")

    try {
      // Get all commerces and find the one with matching access code
      const allCommerces = await axios.get("http://localhost:8080/api/comercios")
      if (!allCommerces.data) {
        setError("Nenhum comércio encontrado")
        return
      }
      const matchingCommerce = allCommerces.data.find((comercio: Comercio) => comercio.codigoAcesso === accessCode)
      if (!matchingCommerce) {
        setError("Código de acesso inválido. Nenhum comércio encontrado com este código.")
        return
      }

      if (matchingCommerce) {
        setCommerce(matchingCommerce)
        setIsVerifying(false)
        setFormData({
          nome: matchingCommerce.nome,
          descricao: matchingCommerce.descricao,
          telefone: matchingCommerce.telefone,
          endereco: matchingCommerce.endereco,
          taxaEntrega: matchingCommerce.taxaEntrega,
          horarioFuncionamento: matchingCommerce.horarioFuncionamento,
          tipoComercio: matchingCommerce.tipoComercio,
          fotoUrl: matchingCommerce.fotoUrl,
          codigoAcesso: matchingCommerce.codigoAcesso,
        })
        setMenuItems([...matchingCommerce.cardapio])
      } else {
        setError("Código de acesso inválido. Nenhum comércio encontrado com este código.")
      }
    } catch (error) {
      setError("Erro ao verificar o código de acesso. Por favor, tente novamente.")
    } finally {
      setLoading(false)
    }
  }

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

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!commerce) return

    setSaving(true)

    try {
      // In a real application, you would send this data to your API
      console.log("Updated commerce data:", {
        ...formData,
        id: commerce.id,
        cardapio: menuItems,
      })

      // Simulate API call
      await axios.put(`http://localhost:8080/api/comercios/${commerce.id}`, {
        ...formData,
        id: commerce.id,
        cardapio: menuItems,
      } as Comercio
      )

      alert("Comércio atualizado com sucesso!")
      navigate(`/comercio/${commerce.id}`)
    } catch (error) {
      setError("Erro ao salvar as alterações")
    } finally {
      setSaving(false)
    }
  }

  return (
    <main className="commerce-form-container">
      <div className="back-navigation">
        <Link to="/" className="back-link">
          <ArrowLeft /> Voltar para lista
        </Link>
      </div>

      <h1 className="form-title">Editar Comércio</h1>

      {isVerifying ? (
        <div className="access-code-container">
          <div className="access-code-form">
            <h2>Acesso ao Comércio</h2>
            <p>Digite o código de acesso do seu comércio para editá-lo</p>

            {error && <div className="form-error">{error}</div>}

            <div className="form-group">
              <label htmlFor="accessCode">Código de Acesso</label>
              <input
                type="text"
                id="accessCode"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                placeholder="Digite o código de acesso"
              />
            </div>

            <button type="button" className="submit-button" onClick={handleVerifyAccessCode} disabled={loading}>
              {loading ? "Verificando..." : "Acessar"}
            </button>
          </div>
        </div>
      ) : (
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

                <button type="button" className="remove-button" onClick={() => handleRemoveMenuItem(index)}>
                  Remover Item
                </button>
              </div>
            ))}

            <button type="button" className="add-button" onClick={handleAddMenuItem}>
              + Adicionar Item ao Cardápio
            </button>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button" disabled={saving}>
              {saving ? "Salvando..." : "Salvar Alterações"}
            </button>
          </div>
        </form>
      )}
    </main>
  )
}

export default EditCommercePage
