const
    _ = require('lodash');

module.exports = {
    healthcheck: async (req, res, next) => {
        try {
            return res.status(200).send('OK')
        } catch (err) {
            console.log(err)
            return res.status(500).send(err)
        }
    },
}