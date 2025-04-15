"use client"

import type React from "react"
import { useState } from "react"
import { Clock, Mail, Phone, Send } from "../components/Icons"
import "../styles/ContactPage.css"

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean
    success: boolean
    message: string
  }>({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus({ submitted: true, success: true, message: "Mensagem enviada com sucesso!" })

    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formData)

    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, success: false, message: "" })
    }, 5000)
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">Entre em Contato</h1>
          <p className="contact-subtitle">Estamos aqui para ajudar você</p>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="info-title">Informações de Contato</h2>
              <p className="info-description">
                Tem alguma dúvida ou sugestão? Estamos sempre disponíveis para ajudar. Entre em contato conosco através
                dos canais abaixo ou preencha o formulário.
              </p>

              <ul className="info-list">

                <li className="info-item">
                  <div className="info-icon">
                    <Phone />
                  </div>
                  <div className="info-content">
                    <h3 className="info-label">Telefone</h3>
                    <p className="info-text">(73) 98111-4736</p>
                  </div>
                </li>

                <li className="info-item">
                  <div className="info-icon">
                    <Mail />
                  </div>
                  <div className="info-content">
                    <h3 className="info-label">E-mail</h3>
                    <p className="info-text">contato@dnsouzadev.tech</p>
                  </div>
                </li>

                <li className="info-item">
                  <div className="info-icon">
                    <Clock />
                  </div>
                  <div className="info-content">
                    <h3 className="info-label">Horário de Atendimento</h3>
                    <p className="info-text">Segunda a Sexta: 9h às 18h</p>
                    <p className="info-text">Sábado: 9h às 13h</p>
                  </div>
                </li>
              </ul>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975588021244!2d-46.65429492392006!3d-23.564611060703373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1682345678901!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa da localização"
                ></iframe>
              </div>
            </div>

            <div className="contact-form-container">
              <h2 className="form-title">Envie uma Mensagem</h2>
              <p className="form-description">
                Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
              </p>

              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? "success" : "error"}`}>{formStatus.message}</div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome Completo*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Assunto*</label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="">Selecione um assunto</option>
                    <option value="Dúvida">Dúvida</option>
                    <option value="Sugestão">Sugestão</option>
                    <option value="Reclamação">Reclamação</option>
                    <option value="Parceria">Parceria</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Digite sua mensagem aqui..."
                    rows={6}
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  <Send className="button-icon" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-section faq-section">
        <div className="contact-container">
          <h2 className="section-title text-center">Perguntas Frequentes</h2>
          <div className="faq-container">
            <div className="faq-item">
              <h3 className="faq-question">Como posso cadastrar meu comércio na plataforma?</h3>
              <p className="faq-answer">
                Para cadastrar seu comércio, basta clicar no botão "Cadastrar Comércio" no topo da página e preencher o
                formulário com as informações do seu estabelecimento. O processo é rápido e gratuito.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Quanto custa para manter meu comércio na plataforma?</h3>
              <p className="faq-answer">
                O cadastro e a manutenção do seu comércio na plataforma são totalmente gratuitos. Não cobramos taxas
                mensais ou anuais para que você mantenha seu estabelecimento listado.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Como posso editar as informações do meu comércio?</h3>
              <p className="faq-answer">
                Para editar as informações do seu comércio, acesse a página "Editar Comércio" e insira o código de
                acesso que foi gerado durante o cadastro. Com ele, você poderá atualizar todas as informações do seu
                estabelecimento.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">É possível adicionar fotos dos produtos?</h3>
              <p className="faq-answer">
                Sim, você pode adicionar fotos dos seus produtos ao cadastrar ou editar os itens do seu cardápio. Fotos
                de qualidade ajudam a atrair mais clientes para o seu estabelecimento.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Como os clientes podem entrar em contato com meu comércio?</h3>
              <p className="faq-answer">
                Os clientes podem entrar em contato diretamente através das informações disponibilizadas na sua página,
                como telefone e endereço. Recomendamos manter essas informações sempre atualizadas.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Perdi meu código de acesso. Como posso recuperá-lo?</h3>
              <p className="faq-answer">
                Se você perdeu seu código de acesso, entre em contato conosco através do formulário nesta página ou pelo
                e-mail contato@dnsouzadev.tech. Após verificarmos que você é o proprietário do comércio, enviaremos um
                novo código.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
