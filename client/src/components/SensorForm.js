import React, { useState } from 'react';

const SensorForm = ({ onAddSensor }) => {
  const [sensorData, setSensorData] = useState({
    id: '',
    type: '',
    min: '',
    max: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSensorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddSensor = () => {
    onAddSensor(sensorData);
    setSensorData({
      id: '',
      type: '',
      min: '',
      max: '',
    });
  };

  return (
    <div>
      <div className="add-sensor">
        <div className="bloco-s1">
          <div className="nome-id">
            <label>
              ID:
              <br />
              <input type="text" name="id" value={sensorData.id} onChange={handleChange} />
            </label>
          </div>

          <div className="drop-tipo">
            <label>
              Tipo:
              <br />
              <select name="type" value={sensorData.type} onChange={handleChange}>
                <option value="">Selecione o Tipo</option>
                <option value="temperatura">Temperatura</option>
                <option value="umidade">Umidade</option>
                {/* Add more options as needed */}
              </select>
            </label>
          </div>
        </div>

        <div className="bloco-s2">
          <div className="minimo">
            <label>
              Mínimo:
              <br />
              <input type="text" name="min" value={sensorData.min} onChange={handleChange} />
            </label>
          </div>

          <div className="maximo">
            <label>
              Máximo:
              <br />
              <input type="text" name="max" value={sensorData.max} onChange={handleChange} />
            </label>
          </div>
        </div>
      </div>
      <br />
      <button type="button" onClick={handleAddSensor}>
        Adicionar Sensor
      </button>
    </div>
  );
};

export default SensorForm;
