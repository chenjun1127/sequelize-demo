const router = require('koa-router')();
const { sequelize } = require("../db");
const Address = sequelize.import("../models/address");

router.get('/address', async (ctx) => {
    await Address.findAll().then(addresses => {
        ctx.body = {
            code: 200,
            data: addresses
        }
    })
})

module.exports = router;