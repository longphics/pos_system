const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/pos_system')
        console.log('Connected to database')
    } catch (error) {
        console.log('Error when connect to database!')
    }
}

module.exports = { connect }
