const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Menu = new Schema ({
    name: {
        type: String,
        require: true,
        unique: true,
    },

    status: {
        type: String,

        enum: [
            'Còn hàng',
            'Hết hàng',
        ],

        default: 'Còn hàng',
    },

    type: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    url: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Menu', Menu)