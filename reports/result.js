module.exports = function(classificados) {

let resultado = classificados.map(function (classificado) {
    return '\n Posição Chegada: ' + classificado.posicao + 
            ' - Código Piloto: ' + classificado.codigoPiloto +
            ' - Nome Piloto: ' + classificado.nomePiloto + '\n' +
            ' - Qtde Voltas Completas: ' + classificado.voltas + 
            ' - Tempo Total Prova: ' + classificado.tempoTotalProva +
            ' - Melhor Volta: ' + classificado.melhorTempo +
            ' - Velocidade Media: ' + classificado.velocidadeMedia +
            ' - Diferença: ' + classificado.diferenca + '\n\n';
});

return resultado.toString();

}