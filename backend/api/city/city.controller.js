const cityService = require('./city.service')

async function getCity(req, res) {
    try {
        const city = await cityService.getCityByName(req.params.name)
        res.send(city)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get city' })
    }
}

module.exports = {
    getCity
}