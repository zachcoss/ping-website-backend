const
    _ = require('lodash'),
    PingSchema = require('../schema/pingSchema');

module.exports = {
    getPingData: async (req, res, next) => {
        try {
            const pings = await PingSchema.Ping.find({}, 'url iconPath duration')
            return res.status(200).send(pings)
        } catch (err) {
            console.log(err)
            return res.status(500).send(err)
        }
    },
    storePingData: async (req, res, next) => {
        try {
            const ping = new PingSchema.Ping(req.body)
            await ping.save()
            return res.status(200).send(ping)
        } catch (err) {
            console.log(err)
            return res.status(500).send(err)
        }
    },
    deletePingData: async (req, res, next) => {
        try {
            await PingSchema.Ping.remove()
            return res.status(200).send('OK')
        } catch (err) {
            console.log(err)
            return res.status(500).send(err)
        }
    },
}