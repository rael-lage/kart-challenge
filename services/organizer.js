module.exports = function(parsedData) {

    //delete header -- first line of array
    parsedData.shift();

    var properties = ['horario', 'codigoPiloto', 'dash', 'nomePiloto', 'numeroVolta', 'tempo', 'velocidade'];
    var listOfObjects = [];
    var i, j;
    for (i = 0; i < parsedData.length; i++) { 
        var singleObj = {}; 
        for (j = 0; j < parsedData[0].length; j++) {                  
            singleObj[properties[j]] = parsedData[i][j];        
        }
        listOfObjects.push(singleObj);
    }
    
    return listOfObjects;
    
}
