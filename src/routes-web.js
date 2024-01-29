module.exports = function (app) {

    /* Rota para máquinas */
    const maquina = require('./services/maquinaService')
    app.post('/api/maquina', (req, res) => {
        const dadosRecebidos = req.body;
        console.log("Dados Recebidos: ", dadosRecebidos);
    })
    app.get('/api/maquina/', maquina.getAllDocs)
    
    /* Rota para sensores */
    const sensoresService = require('./services/sensorService')
    app.post('/api/sensor', (req, res) => {
        const { nome, tipo, maxValor, minValor} = req.body;
        const novoSensor = sensoresService.cadastrarSensor(nome, tipo, maxValor, minValor);
        console.log(req.body);
        res.status(201).json({ mensagem: 'Sensor cadastrado com sucesso!', sensor: req.body});
    })

    
    app.get('/api/sensor', (req, res) => {
        const sensores = sensoresService.listarSensores();
        res.json(sensores);
    })

    /* Rota para test */
    const test = require('./services/test')
    app.post('/api/test', test.returnJson);
}