import type React from "react"
import { Link } from "react-router-dom"
import { Award, Store, TrendingUp, Users } from "../components/Icons"
import "../styles/AboutPage.css"

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">Sobre o CanesFood</h1>
          <p className="about-subtitle">Conectando pessoas aos comércios de Canavieiras desde 2025</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-mission">
            <div className="mission-content">
              <h2 className="section-title">Nossa Missão</h2>
              <p className="mission-text">
                O CanesFood nasceu com uma missão clara: fortalecer a economia local conectando consumidores a
                estabelecimentos de bairro. Acreditamos que os pequenos negócios são a espinha dorsal de comunidades
                vibrantes e prósperas.
              </p>
              <p className="mission-text">
                Nossa plataforma foi criada para dar visibilidade a restaurantes, padarias, mercados e outros comércios
                locais, permitindo que eles alcancem mais clientes e cresçam de forma sustentável.
              </p>
            </div>
            <div className="mission-image">
              <img src="/placeholder.svg?height=400&width=600" alt="Nossa missão" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section values-section">
        <div className="about-container">
          <h2 className="section-title text-center">Nossos Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Store />
              </div>
              <h3 className="value-title">Apoio Local</h3>
              <p className="value-description">
                Priorizamos e promovemos negócios locais, contribuindo para o desenvolvimento econômico da comunidade.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Users />
              </div>
              <h3 className="value-title">Comunidade</h3>
              <p className="value-description">
                Construímos pontes entre consumidores e comerciantes, fortalecendo os laços comunitários.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Award />
              </div>
              <h3 className="value-title">Qualidade</h3>
              <p className="value-description">
                Destacamos estabelecimentos comprometidos com a excelência e a satisfação do cliente.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <TrendingUp />
              </div>
              <h3 className="value-title">Inovação</h3>
              <p className="value-description">
                Buscamos constantemente novas formas de melhorar a experiência de usuários e comerciantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="section-title text-center">Como Funciona</h2>
          <div className="how-it-works">
            <div className="step">
              <div className="step-number">1</div>
              <h3 className="step-title">Encontre</h3>
              <p className="step-description">
                Descubra comércios locais próximos a você, filtrando por categoria, avaliações ou distância.
              </p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3 className="step-title">Explore</h3>
              <p className="step-description">
                Veja detalhes, cardápios, horários de funcionamento e avaliações de outros clientes.
              </p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3 className="step-title">Conecte-se</h3>
              <p className="step-description">
                Entre em contato diretamente com o estabelecimento para fazer pedidos ou tirar dúvidas.
              </p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h3 className="step-title">Compartilhe</h3>
              <p className="step-description">
                Avalie sua experiência e ajude outros usuários a descobrirem ótimos lugares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section team-section">
        <div className="about-container">
          <h2 className="section-title text-center">Nossa Equipe</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                {/* <img src="/placeholder.svg?height=300&width=300" alt="Foto do membro da equipe" /> */}
              </div>
              <h3 className="member-name">Daniel Souza</h3>
              <p className="member-role">Fundador</p>
              <p className="member-bio">
                Desenvolvedor Backend.
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="about-section testimonials-section">
        <div className="about-container">
          <h2 className="section-title text-center">O Que Dizem Sobre Nós</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "O CanesFood transformou meu pequeno restaurante. Desde que nos cadastramos, tivemos um aumento de
                  40% nos pedidos. A plataforma é intuitiva e o suporte é excelente!"
                </p>
                <div className="testimonial-author">
                  <div className="author-photo">
                    <img src="/placeholder.svg?height=60&width=60" alt="Foto do autor" />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">Roberto Almeida</h4>
                    <p className="author-business">Restaurante Sabor Caseiro</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Como moradora nova no bairro, o CanesFood foi essencial para descobrir os melhores lugares. A
                  interface é fácil de usar e as informações são sempre precisas."
                </p>
                <div className="testimonial-author">
                  <div className="author-photo">
                    <img src="/placeholder.svg?height=60&width=60" alt="Foto do autor" />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">Juliana Mendes</h4>
                    <p className="author-business">Cliente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-section cta-section">
        <div className="about-container">
          <div className="cta-content">
            <h2 className="cta-title">Faça Parte da Nossa Comunidade</h2>
            <p className="cta-text">
              Seja você um comerciante querendo expandir seu alcance ou um consumidor em busca dos melhores
              estabelecimentos locais, o CanesFood está aqui para conectar vocês.
            </p>
            <div className="cta-buttons">
              <Link to="/cadastrar" className="cta-button primary">
                Cadastrar Meu Comércio
              </Link>
              <Link to="/contato" className="cta-button secondary">
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
