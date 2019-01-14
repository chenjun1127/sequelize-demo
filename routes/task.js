const router = require('koa-router')();
const { sequelize } = require("../db");
const Task = sequelize.import("../models/task");

router.get('/task', async (ctx) => {
    await Task.findAll().then(tasks => {
        ctx.body = {
            code: 200,
            data: tasks
        }
    })
})

module.exports = router;