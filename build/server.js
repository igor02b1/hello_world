"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (request, response) {
    response.send('Hello World!');
});
app.get('/bsms', function (request, response) {
    response.send('Persistência, responsabilidade pessoal, orientação ao futuro, mentalidade de crescimento');
});
app.get('/bsms/meta', function (request, response) {
    response.send('A minha meta da semana é juntar o maximo possivel de conhecimento sobre API e acordar mais cedo');
});
app.listen(port, function () { });
console.log("o server est\u00E1 rodando na porta: ".concat(port));
