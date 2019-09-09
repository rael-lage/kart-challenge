const assert = require('chai').assert;
const fs = require('fs');

const logReader = require('../middleware/log-reader');
const logParser = require('../middleware/log-parser');
const organizer = require('../services/organizer');
const mapper = require('../services/mapper');
const result = require('../reports/result');

const filePath = 'corrida.log';

let fileData = logReader(filePath);
let parsedData = logParser(fileData);
let objects = organizer(parsedData);
let corrida = mapper(objects);

let resultado = result(corrida.classificar());

let Volta = require('../models/volta');
let Piloto = require('../models/piloto');
let Corrida = require('../models/corrida');

let volta1 = new Volta('13:01:05.217', 1, '1:10.217', '50');
let volta2 = new Volta('13:01:06.815', 1, '1:11.815', '49');

let piloto1 = new Piloto(116, 'Leclerc');
piloto1.addVolta(volta1);
let piloto2 = new Piloto(101, 'Lewis');
piloto2.addVolta(volta2);

let corrida1 = new Corrida('GP SP');
corrida1.addPiloto(piloto1);
corrida1.addPiloto(piloto2);    

describe('middleware/log-reader', function() {
    describe('log-reader-file-exists', function() {
        it('should return if log file exists', function() {
            fs.existsSync(__dirname + filePath, function(result) {
                assert.equal(true, result);
            });
        });
    });
});

describe('middleware/log-reader', function() {
    describe('log-reader-return', function() {
        it('should return a string', function() {
            assert.typeOf(fileData, 'string');
        });
    });
});

describe('middleware/log-parser', function() {
    describe('log-parser-return', function() {
        it('should return an array', function() {
            assert.typeOf(parsedData, 'array');
        });
    });
});

describe('services/organizer', function() {
    describe('organizer-return', function() {
        it('should return an array', function() {
            assert.typeOf(objects, 'array');
        });
    });
});

describe('services/mapper', function() {
    describe('mapper-return', function() {
        it('should return an object', function() {
            assert.typeOf(corrida, 'object');
        });
    });
});

describe('reports/result', function() {
    describe('result-return', function() {
        it('should return an string', function() {
            assert.typeOf(resultado, 'string');
        });
    });
});

describe('models', function() {    
    describe('models/corrida', function() {
        describe('corrida-buscarMelhorVolta-return', function() {
            it('should return 1:10.217', function() {
                assert.equal(corrida1.buscarMelhorVolta(), '1:10.217');
            });
        });
    });
    describe('models/piloto', function() {
        describe('piloto-calcularTempoDeProva-return', function() {
            it('should return 00:01:10.217', function() {
                assert.equal(piloto1.calcularTempoDeProva(), '00:01:10.217');
            });
        });
    });
    describe('models/piloto', function() {
        describe('piloto-contarVoltasCompletas-return', function() {
            it('should return 1', function() {
                assert.equal(piloto1.contarVoltasCompletas(), '1');
            });
        });
    });
    describe('models/piloto', function() {
        describe('piloto-buscarHorarioDeTermino-return', function() {
            it('should return 13:01:05.217', function() {
                assert.equal(piloto1.buscarHorarioDeTermino(), '13:01:05.217');
            });
        });
    });
    describe('models/piloto', function() {
        describe('piloto-buscarMelhorTempo-return', function() {
            it('should return 1:11.815', function() {
                assert.equal(piloto2.buscarMelhorTempo(), '1:11.815');
            });
        });
    });

    describe('models/piloto', function() {
        describe('piloto-calcularVelocidadeMedia-return', function() {
            it('should return 49', function() {
                assert.equal(piloto2.calcularVelocidadeMedia(), '49');
            });
        });
    });

    describe('models/volta', function() {
        describe('volta-getTempo-return', function() {
            it('should return 1:11.815', function() {
                assert.equal(volta2.tempo, '1:11.815');
            });
        });
    });
});




