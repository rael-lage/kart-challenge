const timeDiff = require('../lib/time-diff');

class Corrida {
    
    constructor(nome) {
        this._nome = nome;
        this._pilotos = [];
    }
 
    get nome () {
        return this._nome;
    };

    addPiloto(piloto) {
        this._pilotos.push(piloto);
    }

    classificar() {     

        let classificados = [];
        this._pilotos.map(function (piloto) {
            let classificado = {};                 
            
            classificado['posicao'] = 0;
            classificado['codigoPiloto'] = piloto._codigo;
            classificado['nomePiloto'] = piloto._nome;
            classificado['voltas'] = piloto.contarVoltasCompletas();
            classificado['horarioTermino'] = piloto.buscarHorarioDeTermino();
            classificado['tempoTotalProva'] = piloto.calcularTempoDeProva();
            classificado['melhorTempo'] = piloto.buscarMelhorTempo();
            classificado['velocidadeMedia'] = piloto.calcularVelocidadeMedia();
            classificado['diferenca'] = '';    

            classificados.push(classificado);
        })     
        classificados.sort(function(a,b){
            return a.horarioTermino > b.horarioTermino;
        });

        for (var i = 0; i < classificados.length; ++i) {
            classificados[i]['posicao'] = i + 1;
        }

        for (var i = 0; i < classificados.length; ++i) {
            classificados[i]['diferenca'] = timeDiff(classificados[0]['tempoTotalProva'], classificados[i]['tempoTotalProva']);
        }


        return classificados;
    }

    buscarMelhorVolta () {
        let voltasPilotos = this._pilotos.map(function (piloto) {
            return piloto._voltas;
        });

        let voltas = [].concat(...voltasPilotos);

        let tempoVoltas = voltas.map(function (volta) {
            return volta._tempo;
        })

        let melhorVolta = tempoVoltas.reduce(function (a, b) { return b > a ? a : b; });

        return melhorVolta;
    }

}

module.exports = Corrida