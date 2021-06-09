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
app.post('/produtos/inclui', (req, res) => {


    // Busca de retorno de produto na base de dados
    connection.query ('const {id, produto, preco, disponivel}') = req.body;
    if (err) throw err

    res.send(rows[0])
    res.json({id, produto, preco, disponivel});

  });



// 4 - Serviço de retorno de atualização na base de dados
app.put('/produtos/atualiza', (req, res) => {

  // Busca atualização na base de dados
  const {id} = req.params;
    const product = data.find(pro => pro.id == id);
    if (!product) return res.status(204).json();
    const {preco, codProduto} = req.body;
    product.preco = preco;
    res.json(product);
    })
})


// 5 - Serviço de retorno de lista de todos os departamentos
app.get('/departamento', (req, res) => {

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

