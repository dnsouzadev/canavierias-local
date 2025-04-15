"use client"

import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/Layout.css"
import Footer from "./Footer"
import { Menu, Search, Store, X } from "./Icons"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <div className="layout">
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <button className="menu-button" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
            <Link to="/" className="logo-link">
              <Store className="logo-icon" />
              <span className="logo-text">CanesFood</span>
            </Link>
          </div>

          <nav className={`main-nav ${isMenuOpen ? "is-open" : ""}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                  Início
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cadastrar" className={location.pathname === "/cadastrar" ? "nav-link active" : "nav-link"}>
                  Cadastrar
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/editar" className={location.pathname === "/editar" ? "nav-link active" : "nav-link"}>
                  Editar
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/sobre" className={location.pathname === "/sobre" ? "nav-link active" : "nav-link"}>
                  Sobre
                </Link>
              </li>
              <li className="nav-item">
                <a href="#contato" className="nav-link">
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-right">
            <button className="search-button" onClick={toggleSearch}>
              <Search />
            </button>
          </div>
        </div>

        <div className={`search-container ${isSearchOpen ? "is-open" : ""}`}>
          <div className="search-form">
            <input type="text" placeholder="Buscar comércios..." className="search-input" />
            <button className="search-submit">Buscar</button>
            <button className="search-close" onClick={toggleSearch}>
              <X />
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
