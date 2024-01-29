import React from 'react';
import { Link } from 'react-router-dom';
import painelIcon from '../assets/icons/menu.png';

const Menu = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="menu-content">

      <div className='header-menu'>
          <h2>Opções</h2>
      </div>

        <ul>
          {/* Ajustar o *onClose* para fazer o fluxo enre as páginas do sistema */}
          <li onClick={onClose}>
            <img src={painelIcon} alt="Painel Icon" className="menu-icon" /> Painel
          </li>
          <li onClick={onClose}>
            <img src={painelIcon} alt="Usuarios Icon" className="menu-icon" /> Usuários
          </li>
          <li onClick={onClose}>
            <Link to="/lista-maquinas">Lista de Máquinas</Link>
            <img src={painelIcon} alt="Maquina Icon" className="menu-icon" />
          </li>
          <li onClick={onClose}>
            <img src={painelIcon} alt="Relatorio Icon" className="menu-icon" /> Relatório
          </li>
        </ul>

        <div className='footer-menu'>
          <h2>Sair da conta</h2>
        </div>
        
      </div>
    </div>
  );
};

export default Menu;
