/* Configurações das Bibliotecas */
const express = require('express')
const path = require('path')
const flash = require('connect-flash')  // Middleware
const cons = require('consolidate')
const dust = require('dustjs-helpers');
const dustlinkedin = require('dustjs-linkedin')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 4100
const bodyParser = require('body-parser')


  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))


  // Sinalizando ao Node a view engine
  app.engine('dust', cons.dust)

  /* Engine do Front-End */
  // Connfigurando a engine
  app.set('view engine', 'dust','dustjs-linkedin'); 
  
  // Pasta Views com os arquivos .dust
  app.set('views', path.resolve(__dirname, '../views/')); 
  /* Fim da configuração de engine */

  /* Arquivos do app em React criado */

  clientPath = path.resolve(__dirname , '../client/build');
  console.log(clientPath);
  (app.use(express.static(path.resolve(__dirname , '../client/build'))));

  require('../views/routes-views')(app)  // Telas da pasta views
  require('../src/routes-web')(app)      // API para enviar e receber dados

  // Subindo server em porta desejada
	app.listen(port, () => {
		console.log(`----------- APP INICIADA NA PORTA ${port} -----------`)
	})







 