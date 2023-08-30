import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import BooksPage from './Pages/Bookspage';
import CategoriesPage from './Pages/Categoriespage';
import styles from './Styles/Navigation.module.css';

function App() {
  return (
    <>
      <nav className={styles.navigation}>
        <h1>Bookstore CMS</h1>
        <ul className={styles.navlinks}>
          <li>
            <NavLink to="/" style={{ textDecoration: 'none', color: '#000' }}>Books</NavLink>
          </li>
          <li>
            <NavLink to="categories" style={{ textDecoration: 'none', color: '#000', opacity: '0.5' }}>Categories</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="categories" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
