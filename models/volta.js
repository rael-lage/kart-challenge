class Volta {
    
    constructor(horario, numero, tempo, velocidade) {
        this._horario = horario;
        this._numero = numero;
        this._tempo = tempo;
        this._velocidade = velocidade;
    }

    get numero () {
        return this._numero;
    };

    get tempo () {
        return this._tempo;
    };
 
} 

module.exports = Volta