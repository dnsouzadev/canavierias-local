import type React from "react"
import { Link } from "react-router-dom"
import "../styles/Footer.css"
import { Facebook, Instagram, Linkedin, Mail, Phone, Store, Twitter } from "./Icons"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <div className="footer-logo">
              <Store className="footer-logo-icon" />
              <span className="footer-logo-text">CanesFood</span>
            </div>
            <p className="footer-description">
              Conectando você aos melhores comércios de Canavieiras. Descubra restaurantes, padarias, mercados e muito mais.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Links Rápidos</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/cadastrar">Cadastrar Comércio</Link>
              </li>
              <li>
                <Link to="/editar">Editar Comércio</Link>
              </li>
              <li>
                <a href="#sobre">Sobre Nós</a>
              </li>
              <li>
                <a href="#faq">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#termos">Termos de Uso</a>
              </li>
              <li>
                <a href="#privacidade">Política de Privacidade</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Categorias</h3>
            <ul className="footer-links">
              <li>
                <a href="#restaurantes">Restaurantes</a>
              </li>
              <li>
                <a href="#padarias">Padarias</a>
              </li>
              <li>
                <a href="#mercados">Mercados</a>
              </li>
              <li>
                <a href="#lanchonetes">Lanchonetes</a>
              </li>
              <li>
                <a href="#cafes">Cafés</a>
              </li>
              <li>
                <a href="#farmacias">Farmácias</a>
              </li>
              <li>
                <a href="#outros">Outros</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading" id="contato">
              Contato
            </h3>
            <ul className="footer-contact">
              <li>
                <Phone />
                <span>(73) 98111-4736</span>
              </li>
              <li>
                <Mail />
                <span>contato@dnsouzadev.tech</span>
              </li>
            </ul>
            <div className="footer-newsletter">
              <h4 className="newsletter-heading">Receba Novidades</h4>
              <form className="newsletter-form">
                <input type="email" placeholder="Seu e-mail" className="newsletter-input" />
                <button type="submit" className="newsletter-button">
                  Inscrever
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} CanesFood. Todos os direitos reservados.</p>
          </div>
          <div className="footer-developer">
            <p>
              Desenvolvido com <span className="heart">❤</span> por{" "}
              <a href="https://dnsouzadev.tech" className="developer-link">
                dnsouzadev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
