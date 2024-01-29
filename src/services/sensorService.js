const sensorLib = require('../lib/sensorLib');

const cadastrarSensor = (nome, tipo, maxValor, minValor) => {
    
    const novoSensor = sensorLib.adicionarSensor(nome, tipo, maxValor, minValor);
    return novoSensor;
}

const listarSensores = () => {
    return sensorLib.obterSensores()
}

module.exports = { 
    cadastrarSensor,
    listarSensores
}; 