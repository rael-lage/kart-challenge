const timeSum = require('../lib/time-sum')

class Piloto {
    
    constructor(codigo, nome) {
        this._codigo = codigo;
        this._nome = nome;
        this._voltas = [];
    }

    get codigo () {
        return this._codigo;
    }
 
    get nome () {
        return this._nome;
    }

    addVolta(volta) {
        this._voltas.push(volta);
    }

    calcularTempoDeProva() {        
        let temposDeProva = this._voltas.map(function (volta) {
            return volta._tempo;
        });
        let totalTime = timeSum(temposDeProva);
        return totalTime;        
    }

    contarVoltasCompletas() {        
        let voltasCompletas = Math.max.apply(Math, this._voltas.map(function(volta) { return volta._numero; }))
        return voltasCompletas;
    }

    buscarHorarioDeTermino() {
        let horarioTerminoVoltas = this._voltas.map(function (volta) {
            return volta._horario
        });

        let horarioTerminoProva = horarioTerminoVoltas.reduce(function (a, b) { return a > b ? a : b; });
        
        return horarioTerminoProva;
    }

    buscarMelhorTempo() {
        let tempoVoltas = this._voltas.map(function (volta) {
            return volta._tempo
        });

        let melhorTempo = tempoVoltas.reduce(function (a, b) { return b > a ? a : b; });
        
        return melhorTempo;
    }

    calcularVelocidadeMedia() {        
        let velocidades = this._voltas.map(function (volta) {
            return volta._velocidade;
        });
        let velocidadeMedia = velocidades.reduce(function (total, velocidade) {
            return total + parseFloat(velocidade);
        });
        
        return velocidadeMedia;        
    }
    
}

module.exports = Piloto