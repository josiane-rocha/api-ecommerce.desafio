// Inclusao dos pacotes
const express = require('express')
var mysql      = require('mysql2');

// Instancia o express
const app = express()
app.use(express.json())

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
app.get('/produtos', (req, res) => {

    // Busca produtos   
    connection.query('SELECT id, produto, preco, disponivel FROM sistema_ecommerce.produtos', function(err, rows, fields) {
        if (err) throw err

        res.send(rows)
      })
  })


// 2 - Serviço de retorno de produto
app.get('/produtos/:produtoId/departamentos/:departamentoId', (req, res) => {

  // Busca de retorno de detalhes de 1 único produto
  connection.query('SELECT id, codigo, produto, preco, disponivel FROM sistema_ecommerce.produtos WHERE id_departamento = ' + req.params.departamentoId + ' AND id = ' + req.params.produtoId, function(err, rows, fields) {
      if (err) throw err

      res.send(rows[0])

    })
})


// 3 - Serviço de inclusao de produto na base de dados 
app.post('/departamentos/:departamentosId/produtos',  (req, res) => {

    // Busca de retorno de produto na base de dados
    connection.query('INSERT INTO sistema_ecommerce.produtos (id, codigo, produto, preco, disponivel, id_departamento) VALUES ("' + req.body.id + '", "' + req.body.codigo + '" ,  "' + req.body.produto + '" , "' + req.body.preco + '" , "' + req.body.disponivel + '" , "' + req.params.departamentoId + '")', (err) => {
      if (err)
        console.error(err);
        return res.status(500).send({
          status: "K0",
          message: "Instabilidade no servidor."
        })
      })
  
      res.status(201).send({
        status: "OK",
        message: "Inserido com sucesso"
      })
    })


// 4 - Serviço de retorno de atualização na base de dados
app.put('/produtos/:produtosId', (req, res) => {

  // Busca atualização na base de dados
  connection.query('INSERT INTO sistema_ecommerce.produtos (nome) VALUES ("' + req.body.nome + '")', (err) => {
    if (err) throw err

    res.status(201).send({
      status: "OK",
      message: "Inserido com sucesso"
    })
});
})

connection.query('UPDATE sistema_ecommerce.produtos SET produto = "' + req.body.produto + '" WHERE id = ' + req.params.produtoId, (err) => {
  if (err) throw err

  res.status(200).send({
    status: "OK",
    message: "Atualizado com sucesso."
  })
});


// 5 - Serviço de retorno de lista de todos os departamentos
app.get('/departamentos', (req, res) => {

    // Busca departamentos    
    connection.query('SELECT id, nome FROM sistema_ecommerce.departamentos', function(err, rows, fields) {
        if (err) throw err

        res.send(rows)
      })
  })


// 6 - Serviço de retorno de departamentos e lista de produtos
app.get('/departamentos/:departamentoId/produtos', (req, res) => {

    // Busca de departamentos e lista de produtos
    connection.query('SELECT id, codigo, produto, preco, disponivel FROM sistema_ecommerce.produtos WHERE id_departamento = ' + req.params.departamentoId, function(err, rows, fields) {
      if (err) throw err

      res.send(rows)
    })
  })


// Subindo servidor Node
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

