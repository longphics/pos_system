const express = require('express')
const app = express()
const path = require('path')
const handlebars = require ('express-handlebars').engine
const database = require('./database')

const routes = require ('./routes')

app.use(express.static(path.join(__dirname, 'public')))

app.engine('html', handlebars({ extname: '.html' }))
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app)
database.connect()

app.listen(3000)