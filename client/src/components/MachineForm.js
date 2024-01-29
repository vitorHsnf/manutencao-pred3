import React, { useState } from 'react';
import SensorForm from './SensorForm';

const MachineForm = ({ onSubmit }) => {
  const [machineData, setMachineData] = useState({
    serialNumber: '',
    installationDate: '',
    equipmentName: '',
    model: '',
    manufacturer: '',
    location: '',
    sensors: [],
  });

  const [showSensorForm, setShowSensorForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMachineData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleShowSensorForm = () => {
    setShowSensorForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(machineData);
    setShowSensorForm(false);
    setMachineData({
      serialNumber: '',
      installationDate: '',
      equipmentName: '',
      model: '',
      manufacturer: '',
      location: '',
      sensors: [],
    });
  };

  const handleAddSensor = (sensorData) => {
    setMachineData((prevData) => ({
      ...prevData,
      sensors: [...prevData.sensors, sensorData],
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="add-maquina">
          <div className="bloco-m1">
            <div className="num-serie">
              <label>
                Nº de Série:
                <br />
                <input type="text" name="serialNumber" value={machineData.serialNumber} onChange={handleChange} />
              </label>
            </div>

            <div className="data-install">
              <label>
                Data de Instalação:
                <br />
                <input type="date" name="installationDate" value={machineData.installationDate} onChange={handleChange} />
              </label>
            </div>
          </div>

          <div className="bloco-m2">
            <div className="nome-equip">
              <label>
                Nome do Equipamento:
                <br />
                <input type="text" name="equipmentName" value={machineData.equipmentName} onChange={handleChange} />
              </label>
            </div>
          </div>

          <div className="bloco-m3">
            <div className="nome-fabric">
              <label>
                Fabricante:
                <br />
                <input type="text" name="manufacturer" value={machineData.manufacturer} onChange={handleChange} />
              </label>
            </div>

            <div className="nome-modelo">
              <label>
                Modelo:
                <br />
                <input type="text" name="model" value={machineData.model} onChange={handleChange} />
              </label>
            </div>
          </div>

          <div className="bloco-m4">
            <div className="local-setor">
              <label>
                Local/Setor:
                <br />
                <input type="text" name="location" value={machineData.location} onChange={handleChange} />
              </label>
            </div>
          </div>
        </div>
        <br />
        {!showSensorForm && (
          <div className="button-container">
            <button type="button" onClick={handleShowSensorForm}>
              Adicionar Sensor (Overlay)
            </button>
            {machineData.sensors.length > 0 && (
              <button type="button" onClick={() => setShowSensorForm(false)}>
                Adicionar Outro Sensor
              </button>
            )}
          </div>
        )}
      </form>
      {showSensorForm && (
        <div className="overlay">
          <SensorForm onAddSensor={handleAddSensor} />
          <button type="button" onClick={() => setShowSensorForm(false)}>
            Finalizar Registro
          </button>
        </div>
      )}
    </div>
  );
};

export default MachineForm;
