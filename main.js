const logReader = require('./middleware/log-reader');
const logParser = require('./middleware/log-parser');
const organizer = require('./services/organizer');
const mapper = require('./services/mapper');
const result = require('./reports/result');

const filePath = 'corrida.log';

let fileData = logReader(filePath);
let parsedData = logParser(fileData);
let objects = organizer(parsedData);
let corrida = mapper(objects);

let resultado = result(corrida.classificar());
console.log(resultado);

console.log('[ Melhor Volta da Corrida: ' + corrida.buscarMelhorVolta() + ' ]');


//var properties = ['Posição Chegada', 'Código Piloto', 'Nome Piloto', 'Qtde Voltas Completas', 'Tempo Total Prova'];
