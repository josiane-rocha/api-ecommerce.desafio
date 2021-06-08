# REST API - GAMA ACADEMY  E-COMMERCE

# Sobre

<p align="left"> Projeto de construção de uma REST API de um e-commerce fictício, realizado no bootcamp do Gama Experience #37.  </p>

<hr>

<!-- TECHNOLOGIES -->

## Tecnologias utilizadas

<p align="left">

- Node.js 14.17.0;
- MySQL 8.0.25. 
- ExpressJS;</p>

<hr>

<!-- REPOSITORY -->

## Clonando o repositório

No cmd, navegue até o diretório em que deseja clonar o repositório.

Dentro do diretório, utilize o comando:

```
$ git clone https://github.com/josiane-rocha/api-ecommerce.desafio.git
```

<hr>

<!-- INSTALL -->

## Instalando as dependências

    npm install
    
<hr>    
    
<!-- PORTA -->

## **Host e porta**

<localhost:3000>

<hr>

<!-- PROJECT -->

# Como rodar o projeto

<p> Como executar a API: </p> <br>
      - abrir na web (firefox, chrome, explore) <a href="http://localhost:8888/">http://localhost:8000/</a>; <br>
      - é possivel acessar através do <a href="https://www.postman.com/downloads/">postman, clique aqui</a>, para fazer o download; <br>
      - também é possivel utilizar o <a href="https://web.postman.co/home">postman online</a>.<br>
      <br>
      
<hr>
      
<!-- MÉTODO-->

### **Método 1: GET**

Retorna a lista de todos os produtos existentes.

<hr>

<!-- URL-->

### **URL**

/projeto/v1/produtos

<hr>

<!-- SUCESS -->

### **Resposta de sucesso**

- Requisição:

  /projeto/v1/produtos

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  ```json
  [
    {
        "id": 1,
        "produto": "kit teclado e mouse sem fio logitech",
        "preco": 130,
        "disponivel": 10
    },
    {
        "id": 2,
        "produto": "fone sem fio sony",
        "preco": 250,
        "disponivel": 5
    },
    {
        "id": 3,
        "produto": "notebook dell gamer g5",
        "preco": 7500,
        "disponivel": 20
    },
    {
        "id": 4,
        "produto": "notebook gamer predator helios",
        "preco": 8500,
        "disponivel": 6
    },
    {
        "id": 5,
        "produto": "hp deskjet ink advantage",
        "preco": 350,
        "disponivel": 10
    },
    {
        "id": 6,
        "produto": "epson eko tank l3160",
        "preco": 1099,
        "disponivel": 30
    }
  ]
  ```

 <hr>
 
 <!-- MÉTODO-->

### **Método 2: GET**

Retorna a lista de 1 único produto existente.

<hr>

<!-- URL-->

### **URL**

/projeto/v1/departamentos/:departamentoId/produtos/:produtoId

<hr>

<!-- SUCESS -->

### **Resposta de sucesso**

- Requisição:

  projeto/v1/departamentos/:departamentoId/produtos/:produtoId - No Key DepartamentoId e ProdutoId colocar como valor 1 nos dois

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  ```json
  [
   {
    "id": 1,
    "codigo": 23456,
    "produto": "kit teclado e mouse sem fio logitech",
    "preco": 130,
    "disponivel": 10
    }
  ]
  ```

<hr>

<!-- RESP -->

### **Resposta de erro**

Dispara caso o array de Produtos não existir.

- Requisição:

  `projeto/v1/departamentos/:departamentoId/produtos/:produtoId` - - No Key DepartamentoId e ProdutoId colocar qualquer valor maior que 4 nas duas opções

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-404%20NOT%20FOUND-red)

- Conteúdo:

  ```json
  {
    "err": "Nenhum produto encontrado."
  }
  ```
  
 <hr>
  
  <!-- MÉTODO-->

### **Método 3: POST**

Incluir produto no banco de dados.

<hr>

<!-- URL-->

### **URL**

/projeto/v1/

<hr>

<!-- SUCESS -->

### **Resposta de sucesso**

- Requisição:

  projeto/v1/ -

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  
 <hr>
 
 <!-- MÉTODO-->

### **Método 4: PUT**

Atualizar dados de 1 produto no banco de dados.

<hr>

<!-- URL-->

### **URL**

/projeto/v1

<hr>

<!-- SUCESS -->

### **Resposta de sucesso**

- Requisição:

  projeto/v1 -

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:


<hr>

<!-- RESP -->

### **Resposta de erro**

Dispara caso o ID do Produto não existir.

- Requisição:

  `projeto/v1/departamentos/:departamentoId/produtos/:produtoId` - - No Key DepartamentoId e ProdutoId colocar como qualquer valor maior que 1 nos dois

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-404%20NOT%20FOUND-red)

- Conteúdo:

  ```json
  {
    "err": "ID de produto não econtrado."
  }
  ```
  
  ### **Resposta de erro**

Dispara caso o produto estiver incompleto ou inválido.

- Requisição:

  `projeto/v1/departamentos/:departamentoId/produtos/:produtoId` - - No Key DepartamentoId e ProdutoId colocar como qualquer valor maior que 1 nos dois

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-400%20NOT%20FOUND-red)

- Conteúdo:

  ```json
  {
    "err": "Produto com dados incompleto ou inválido ."
  }
  ```
  
 <hr>
 
 ### **Método 5: GET**

Retorna a lista de todos os departamentos.

<hr>

<!-- URL-->

### **URL**

/projeto/v1/departamentosd

<hr>

<!-- SUCESS -->

### **Resposta de sucesso**

- Requisição:

  /projeto/v1/departamentos

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  ```json
  [
    {
        "id": 1,
        "nome": "acessorios"
    },
    {
        "id": 2,
        "nome": "notebook"
    },
    {
        "id": 3,
        "nome": "impressora"
    }
  ]
  ```

<hr>

  
  ### **Método 6: GET**

Retorna departamento e lista de produtos associados a ele.

<hr>

<!-- URL-->

### **URL**

/projeto/v1/departamentos/:departamentoId/produtos/:produtoId

<hr>

<!-- SUCESS -->

### **Resposta de sucesso**

- Requisição:

  projeto/v1/departamentos/:departamentoId/produtos/:produtoId - No Key DepartamentoId digitar um número de 1 a 3

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  ```json
  [
    {
        "id": 1,
        "codigo": 23456,
        "produto": "kit teclado e mouse sem fio logitech",
        "preco": 130,
        "disponivel": 10
    },
    {
        "id": 2,
        "codigo": 23457,
        "produto": "fone sem fio sony",
        "preco": 250,
        "disponivel": 5
    }
  ]
  ```

<hr>

<!-- RESP -->

### **Resposta de erro**

Dispara caso o array de Produtos não existir.

- Requisição:

  projeto/v1/departamentos/:departamentoId/produtos/:produtoId - No Key DepartamentoId digitar o número 4 ou maior que ele

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-404%20NOT%20FOUND-red)

- Conteúdo:

  ```json
  {
    "err": "Departamento não existe na base de dados."
  }
  ```
  <hr>
  
<!-- CONTACTS -->
  
## Contatos

GitHub: [Josiane Rocha](https://github.com/josiane-rocha)

GitHub: [Michelline Cavalcanti](https://github.com/michellinecavalcanti)

GitHub: [Leonizia Medeiros]( )