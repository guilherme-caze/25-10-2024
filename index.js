const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, "public","index.html") //Informando o caminho
    res.sendFile(filePath) //Gerando o caminho para o cliente
})

app.use(express.urlencoded({extended: true})) //middleware para tratar rota do tipo post
app.post('/resultado', (req, res) =>{
    const {nome, email} = req.body
    res.send(`Dados recebidos. Seja bem-vindo: ${nome}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
