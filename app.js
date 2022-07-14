/* 用require來引入express模組 */
const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'));


/* 斜線代表根目錄，並且輸出Hello World */
app.get('/', (req, res) => {
  res.render('index');
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio');
})

app.get('/contact', (req, res) => {
  res.render('contact');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})