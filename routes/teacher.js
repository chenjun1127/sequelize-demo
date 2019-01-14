const router = require('koa-router')();
const { sequelize } = require("../db");
const Teacher = sequelize.import("../models/teacher");
const Course = sequelize.import("../models/course");

router.get('/teacher', async (ctx) => {
    await Teacher.findAll({ include: { model: Course, attributes: { exclude: ['updatedAt', 'createdAt'] } } }).then(teachers => {
        ctx.body = {
            code: 200,
            data: teachers
        }
    })
})

module.exports = router;