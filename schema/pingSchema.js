const 
    mongoose = require('mongoose');

const PingSchema = new mongoose.Schema({
    url: { type: String, required: true },
    iconPath: { type: String, required: false },
    duration: { type: String, required: true },
}, { timestamps: true })

module.exports = {
    'Ping': new mongoose.model('Ping', PingSchema),
}