class Sensor {
    constructor(nome, tipo, maxValor, minValor) {
        this.nome = nome;
        this.tipo = tipo;          // Tipo de Sensor
        this.maxValor = maxValor;
        this.minvalor = minValor;
    }
}

module.exports = Sensor;