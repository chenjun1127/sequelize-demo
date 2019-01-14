const router = require('koa-router')();
const { sequelize } = require("../db");
const Teacher = sequelize.import("../models/teacher");
const Course = sequelize.import("../models/course");

router.get('/course', async (ctx) => {
    await Course.findAll({ include: { model: Teacher, attributes: { exclude: ['updatedAt', 'createdAt'] } } }).then(courses => {
        ctx.body = {
            code: 200,
            data: courses
        }
    })
})

module.exports = router;