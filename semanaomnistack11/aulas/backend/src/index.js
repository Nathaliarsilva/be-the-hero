const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * ROTA: Criar rotas é basicamente construir uma em um programa único, que sempre é chamado, e que vai interpretar 
 * a URL e retornar uma página gerada dinamicamente conforme o que foi informado na URL.
 * 
 * ROTA (seria o "caminho completo") - RECURSO (uma "parte que queira acessar")
 */

/**
 * Método HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar  
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where
  */

/**
 * REQUEST: Guarda todos os dados da requisição do usuário
 * RESPONSE: Responsável por trazer uma "resposta"
 */

app.listen(3333);
