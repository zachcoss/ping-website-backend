const
    _ = require('lodash'),
    PingSchema = require('../schema/pingSchema');

module.exports = {
    getPingData: async (req, res, next) => {
        try {
            return res.status(200).send('OK')
        } catch (err) {
            console.log(err)
            return res.status(500).send(err)
        }
    },
    storePingData: async (req, res, next) => {
        try {
            return res.status(200).send('OK')
        } catch (err) {
            console.log(err)
            return res.status(500).send(err)
        }
    },
    deletePingData: async (req, res, next) => {
        try {
            return res.status(200).send('OK')
        } catch (err) {
            console.log(err)
            return res.status(500).send(err)
        }
    },
}