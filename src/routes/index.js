const welcome = require('./welcome')
const home = require('./home')
const menu = require('./menu')
const payment = require('./payment')
const history = require('./history')
const notice = require('./notice')

function route (app) {
    app.use('/', welcome)
    app.use('/home', home)
    app.use('/menu', menu)
    app.use('/payment', payment)
    app.use('/history', history)
    app.use('/notice', notice)
}

module.exports = route