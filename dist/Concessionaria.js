"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    Concessionaria.prototype.fornecerHorarioDeFuncionamento = function () {
        return 'De segunda a sexta das 8:00 as 18:00 e sabado das 08:00 as 12:00';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
