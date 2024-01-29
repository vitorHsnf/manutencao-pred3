// App.js
import React, { useState, useEffect } from 'react';
import './styles.css';
import { Route, Routes } from 'react-router-dom';
import CadastroMaquina from './components/CadastroMaquina';
import ListaMaquinas from './components/ListaMaquinas';

function App() {

  const [appData, setData] = useState(null);

  // Busca dados da API assim que o aplicativo é carregado
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CadastroMaquina appData={appData} setData={setData}/>} />
        <Route path="/lista-maquinas" element={<ListaMaquinas />} />
      </Routes>
      
    </div>
  );
}

export default App;
