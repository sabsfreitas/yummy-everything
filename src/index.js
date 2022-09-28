/*
METHODS HTTP
    GET    - BUSCAR ALGUMA COISA
    POST   - ENVIAR DADOS PARA O SV
    PUT    - ATUALIZAR UM REGISTRO INTEIRO
    PATCH  - ATUALIZAR PARTE DE UM DADO
    DELETE - AUTOEXPLICATIVO

STATUS:
    200 - FOI TUDO BEM
    201 - CREATED - SIGINIFICA QUE CRIEI ALGUMA COISA MAS NAO PRECISO TE RETORNAR NADA
    204 - NO CONTENT

    400 - ERRO - BAD REQUEST
    401 - UNAUTHORIZED - NAO AUTORIZADO - NAO PODE FAZER ISSO (TOKEN EXPIRADO)
    403 - FORBIDDEN - NAO PODE MESMO
    404 - NOT FOUND - NAO ENCONTRADO
    409 - CONFLITO 

    500 - ERRO INTERNO NO SERVIDOR

*/

const express = require('express');
const app = express();
const dbcon = require('./config/db-config');

app.use(express.json());

const receitasRouter = require('./receitas/routes');
app.use('/receitas', receitasRouter);

const usuariosRouter = require('./usuarios/routes');
app.use('/usuarios', usuariosRouter);

app.listen(3000, () => console.log("Listening at 3000"));