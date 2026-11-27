import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Início</Link>
      <Link to="/Sobre">Sobre</Link>
      <Link to="/Personagens">Personagens</Link>
    </nav>
  );
}

export default Navbar;