const
    _ = require('lodash'),
    PingSchema = require('../schema/pingSchema'),
    PingService = require('../services/pingService');

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
            const ping = await PingService.pingAndGetIconPath(req.body.url)
            const pingData = new PingSchema.Ping(ping)
            await pingData.save()
            return res.status(200).send(pingData)
        } catch (err) {
            console.log(err)
            return res.status(500).send(err.message)
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