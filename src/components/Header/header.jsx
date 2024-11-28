import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import busca from "../../assets/busca.png";
import logo from "../../assets/logo.png";
import Inicio from "../../Pages/Inicio/inicio";
import Doados from "../../Pages/Doados/doados";
import QueroDoar from "../../Pages/QueroDoar/querodoar";
import styles from "./Header.module.scss"; 

export default function Header() {
  return (
    <BrowserRouter>
      <header className={styles.header}>
        <section className={styles.logoSection}>
          <img src={logo} alt="Imagem livro" className={styles.logo} />
          <h1 className={styles.title}>Livros vai na web</h1>
        </section>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.link} ><Link to="/">Início</Link></li>
            <li className={styles.link} ><Link to="/doados">Livros Doados</Link></li>
            <li className={styles.link} ><Link to="/querodoar">Quero Doar</Link></li>
          </ul>
        </nav>
        <div className={styles.search}>
          <input type="text" placeholder="O que você procura?" className={styles.searchInput} />
          <img src={busca} alt="Buscar" className={styles.searchIcon} />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/doados" element={<Doados />} />
        <Route path="/querodoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
