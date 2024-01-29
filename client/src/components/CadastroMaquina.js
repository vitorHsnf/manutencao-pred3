import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import Menu from './Menu';
import axios from 'axios';

const CadastroMaquina = (props) => {

  // Menu 
  const [menuVisible, setMenuVisible] = useState(false);

  // Variável com os dados da máquina
  const [data, setData] = useState({
    numeroSerie: '',
    dataInstalacao: '',
    nomeEquipamento: '',
    fabricante: '',
    modelo: '',
    localSetor: ''
  });

  // Recebe os dados dos campos do formulário
  const valueInput = (e) => setData({...data, [e.target.name]: e.target.value});

  // Mensagens do Sistema
  const [message, setMessage] = useState("");

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };
  
  // Executa a função quando o usuário clicar no botão "Enviar" do formulário
  const handleCadastro = async (e) => {

    // Bloquear o recarregamento da página
    e.preventDefault();


    /* Lógica para lidar com os dados do cadastro (Implementar aqui) */
    // Criar a constante com os dados do cabeçalho
    const headers = {
      // Indicar que será enviado os dados em formato de objeto
      'headers': {
        'Content-Type': 'application/json'
      }
    }
    console.log("Enviando para API...");
    
    console.log(headers);

    try {
      const response = await axios.post('/api/sensor', data, headers);
      console.log('Dados cadastrados:', data);
      
      setMessage(response.data.message);
      console.log(props);

      // Limpa os campos do formulário
      setData({
        numeroSerie: '',
        dataInstalacao: '',
        nomeEquipamento: '',
        fabricante: '',
        modelo: '',
        localSetor: ''
      });

    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message);
      } else {
        console.log("Erro durante a requisição: ", err)
        setMessage("Erro: Tente novamente mais tarde ou entre em contato com...!");
      }
    }


    
  };

  return (
    <div>
      <div className="menu-button" onClick={handleMenuToggle}>
        <Hamburger toggled={menuVisible} color="#ffffff"/>
      </div>

      <div className='header'>
          <h2>Cadastro de Máquinas</h2>
          {menuVisible && <Menu onClose={handleCloseMenu} />}
      </div>

      <div className='container'>
        <form>
          <div className='input-field'>
          <label>Nº de Série:<br/>
            <input type="text" name='numeroSerie' onChange={valueInput} />
          </label>
          </div>

          <div className='input-field'>
          <label>Data de Instalação:<br/>
            <input type="date" name='dataInstalacao' onChange={valueInput} />
          </label>
          </div>

          <div className='input-field'>
          <label>Nome do Equipamento:<br/>
            <input type="text" name='nomeEquipamento' onChange={valueInput} />
          </label>
          </div>

          <div className='input-field'>
          <label>Fabricante:<br/>
            <input type="text" name='fabricante' onChange={valueInput} />
          </label>
          </div>

          <div className='input-field'>
          <label>Modelo:<br/>
            <input type="text" name='modelo' onChange={valueInput} />
          </label></div>

          <div className='input-field'>
          <label>Local/Setor:<br/>
            <input type="text" name='localSetor' onChange={valueInput} />
          </label>
          </div>

          <br/>

          <button className="rounded-gray" type="button" onClick={handleCadastro}>Cadastrar</button>

          {message && <div className="message">{message}</div>}

        </form>
      </div>
    </div>
  );
};

export default CadastroMaquina;
