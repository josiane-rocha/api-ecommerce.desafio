// Inclusao dos pacotes
const express = require('express')
var mysql      = require('mysql2');

// Instancia o express
const app = express()

// Definicao de porta
const port = 3000

// Abrindo conexao com base de dados
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '@Deus0506',
    database : 'sistema_ecommerce'
  })

connection.connect()


// 1 - Serviço de retorno de lista de todos os produtos existentes
app.get('/projeto/v1/produtos', (req, res) => {

    // Busca produtos   
    connection.query('SELECT id, produto, preco FROM sistema_ecommerce.produtos', function(err, rows, fields) {
        if (err) throw err

        res.send(rows)
      })
  })


// 2 - Serviço de retorno de produto
app.get('/projeto/v1/departamentos/:departamentoid/produtos/:produtoId', (req, res) => {


    // Busca de retorno de detalhes de 1 produto
    connection.query('SELECT  id, produto, preco FROM sistema_ecommerce.produto WHERE id_departamento =  ' + req.params.departamentoId + ' AND id = ' + req.params.produtoId, function(err, rows, fields) {
        if (err) throw err

        res.send(rows[0])
      })
  })


// 3 - Serviço de inclusao de produto na base de dados 
app.post('/projeto/v1/codroduto', async (req, res) => {


    // Busca de retorno de produto na base de dados
    const {preco, codProduto} = req.body;
    
    res.json({preco, codProduto});

});



// 5 - Serviço de retorno de lista de todos os departamentos
app.get('/projeto/v1/departamentos', (req, res) => {

    // Busca departamentos    
    connection.query('SELECT id, nome FROM sistema_ecommerce.departamentos', function(err, rows, fields) {
        if (err) throw err

        res.send(rows)
      })
  })


// 6 - Serviço de departamentos e lista de produtos
app.get('/projeto/v1/departamento/:id', (req, res) => {


    // Busca de departamentos e lista de produtos
    connection.query('SELECT id, nome FROM sistema_ecommerce.departamentos WHERE id_departamentos = ' + req.params.departamentoId, function(err, rows, fields) {
      if (err) throw err

      res.send(rows)
    })
})


// Subindo servidor Node
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})