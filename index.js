const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Middleware para servir arquivos estáticos (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true })) // Para tratar dados de formulários

// Configura o diretório e a engine EJS para renderizar templates
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, "public","index.html") //Informando o caminho
    res.sendFile(filePath) //Gerando o caminho para o cliente
})

// Rota para processar o formulário e exibir os resultados
app.post('/resultado', (req, res) => {
  const { NomeInput, EmailInput } = req.body // Corrige para corresponder ao `name` do formulário
  res.render('resultado', { NomeInput, EmailInput }) // Passa os dados para o template
})

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, "public","contato.html") //Informando o caminho
  res.sendFile(filePath) //Gerando o caminho para o cliente
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
