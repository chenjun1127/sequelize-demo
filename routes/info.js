const router = require('koa-router')();
const { sequelize } = require("../db");
const Info = sequelize.import("../models/info");

router.get('/Info', async (ctx) => {
    await Info.findAll().then(info => {
        ctx.body = {
            code: 200,
            data: info
        }
    })
})

module.exports = router;