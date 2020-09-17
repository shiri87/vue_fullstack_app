
//deconstructs
const { me } = require('../models');
const { Op } = require('../models')

module.exports = {
    async getMe(req, res) {
        try {
            const meData = await me.findAll()
            res.send(meData)
        }
        catch (err) {
            res.status(500)
            res.send("there was a error on the", err)
        }
    },
    async postMe(req, res) {
        try {
            const meData = await me.create(req.body);
            res.send(meData)
        } catch (error) {
            res.status(500)
            res.send("err on server", err)
        }
    },
    async putMe(req, res) {
        res.status(200)
        res.send('put me')
    },
    async deleteMe(req, res) {
        res.status(200)
        res.send('delete me')
    },
}