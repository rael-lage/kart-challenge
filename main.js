let logReader = require('./middleware/log-reader');
let logParser = require('./middleware/log-parser');
let organizer = require('./services/organizer');
let mapper = require('./services/mapper')
let result = require('./reports/result')

let filePath = 'corrida.log';

let fileData = logReader(filePath);
let parsedData = logParser(fileData);
let objects = organizer(parsedData);
let corrida = mapper(objects);

let resultado = result(corrida.classificar());
console.log(resultado);

console.log('[ Melhor Volta da Corrida: ' + corrida.buscarMelhorVolta() + ' ]');


//var properties = ['Posição Chegada', 'Código Piloto', 'Nome Piloto', 'Qtde Voltas Completas', 'Tempo Total Prova'];
