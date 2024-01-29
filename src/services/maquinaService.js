const asyncHandler = require('../helpers/asyncHandler');
const sensores = require('../models/sensorModel');

const getAllDocs = asyncHandler(async (req, res) => {
    try {
        const data = req.body
        res.status(200).json(data);
    } catch (e) {
        throw err
    }
})

const createDoc = (req, res) => {
    try {
        const machineName = req.body.name;
        const sensorType = req.body.sensorTipo;
        const maxTemp = req.body.tempMax;
        const minTemp = req.body.tempMin;

        const novoSensor = {
            nome: machineName,
            tipo: sensorType,
            maxTemp: maxTemp,
            minTemp: minTemp
        }

        sensores.addSensor(novoSensor);

        res.status(201).json({mensagem: 'Sensor cadastrado!', sensor: novoSensor});
    } catch(e) {
        console.error(e);
        res.status(500).json({ erro: 'Erro interno do servidor' });
    }
    console.log(`req.body = ${JSON.stringify(req.body)}`)
}

module.exports = { 
    createDoc,
    getAllDocs 
}