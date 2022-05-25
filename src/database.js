const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/pos_system')
        console.log('Connected to database')
    } catch (error) {
        console.log('Error when connect to database!\n' + error)
    }
}

module.exports = { connect }
