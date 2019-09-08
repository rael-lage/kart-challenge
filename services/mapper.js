module.exports = function(objects) {

    let Piloto = require('../models/piloto');
    let Volta = require('../models/volta');
    let Corrida = require('../models/corrida');

    let corrida = new Corrida('Kart');
    let pilotos = [];
    let codigosPilotos = [...new Set(objects.map(item => item.codigoPiloto))];

    codigosPilotos.map(function (codigoPiloto) {
        let piloto = new Piloto(codigoPiloto, objects.find(x => x.codigoPiloto === codigoPiloto).nomePiloto);
        pilotos.push(piloto);
    });

    pilotos.map(function (piloto) {
        
        let voltas = objects.filter(function(object) {
            return object.codigoPiloto === piloto.codigo;
        });

        voltas.map(function(volta) {
            let objVolta = new Volta(volta.horario, volta.numeroVolta, volta.tempo, volta.velocidade)
            piloto.addVolta(objVolta);
        });

        corrida.addPiloto(piloto);
    });
    
    return corrida;
    
}
