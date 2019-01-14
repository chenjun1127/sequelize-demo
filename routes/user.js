const router = require('koa-router')();
const { sequelize } = require("../db");
const User = sequelize.import("../models/user");
const Task = sequelize.import("../models/task");
const Address = sequelize.import("../models/address");
const Info = sequelize.import("../models/info");

router.get('/user', async (ctx) => {
    // await User.findAll({ include: [{ all: true }] }).then(users => { // 全模型关联
    await User.findAll({ include: [{model:Task}, Address,Info] }).then(users => {
        ctx.body = {
            code: 200,
            data: users
        }
    })


})

module.exports = router;