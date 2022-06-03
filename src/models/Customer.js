const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Customer = new Schema ({
    name: {
        type: String,
        require: true,
    },

    orders: [{
        dishes: [{
            name: {
                type: String,
                required: true,
            },

            count: {
                type: Number,
                required: true,
                min: 1,
            },
        }],

        date: {
            type: Date,
            default: Date.now,
        },

        status: {
            type: String,
            enum: [
                'Chờ xác nhận',
                'Đã xác nhận',
                'Hoàn thành',
            ],
            default: 'Chờ xác nhận',
        },

        payment: {
            status: {
                type: String,
                enum: [
                    'Chưa thanh toán',
                    'Đã thanh toán',
                ],
                default: 'Chưa thanh toán',
            },
            method: {
                type: String,
                enum: [
                    '',
                    'Thanh toán bằng Momo',
                    'Thanh toán bằng ZaloPay',
                ],
                default: '',
            },
        },

        feedback: {
            type: Number,
            enum: [0, 1, 2, 3, 4, 5],
            default: 0, // Chưa đánh giá
        },
    }],

    notices: [String]
})

module.exports = mongoose.model('Customer', Customer)
