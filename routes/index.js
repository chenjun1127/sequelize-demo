const router = require('koa-router')();
const { sequelize } = require("../db");
const User = sequelize.import("../models/user");
const Task = sequelize.import("../models/task");
const Address = sequelize.import("../models/address");
const Info = sequelize.import("../models/info");
const Teacher = sequelize.import("../models/teacher");
const Course = sequelize.import("../models/course");

router.get('/', async (ctx) => {
    // 手动创建一些数据
    await User.findAll().then(async res => {
        if (!res.length) {
            User.create({ name: 'Eirc', age: 18 }); // 只有1条ID肯定为1，
        }
    })
    await Info.findAll().then(async res => {
        if (!res.length) {
            Info.create({ email: '402074940@qq.com', sex: '男', phone: '13480682695', userId: 1 });
        }
    })
    await Task.findAll().then(async res => {
        if (!res.length) {
            Task.create({ taskName: '做家务', userId: 1 });
            Task.create({ taskName: '打游戏', userId: 1 });
        }
    })
    await Address.findAll().then(async res => {
        if (!res.length) {
            Address.create({ province: '广东省', city: '深圳市', detail: '民治街沙元埔村1504', userId: 1 });
            Address.create({ province: '河南省', city: '郑州市', detail: '友谊小区3栋504', userId: 1 });
            Address.create({ province: '湖北省', city: '武汉市', detail: '汉江路3号商铺3层1004', userId: 1 });
        }
    })
    await Teacher.findAll().then(async res => {
        if (!res.length) {
            var teacher1 = await Teacher.create({ teacherName: '张晓龙', age: 30 });
            var teacher2 = await Teacher.create({ teacherName: '陈三', age: 25 });
            var teacher3 = await Teacher.create({ teacherName: '李四', age: 45 });
            var course1 = await Course.create({ courseName: '英语' });
            var course2 = await Course.create({ courseName: '数学' });
            var course3 = await Course.create({ courseName: '语文' });
            await teacher1.addCourses([course1, course2], { type: 0 });
            await teacher2.addCourses([course3], { type: 0 });
            await teacher3.addCourses([course1, course3], { type: 0 });
            await course1.addTeachers([teacher1, teacher2], { type: 1 });
            await course2.addTeachers([teacher2, teacher3], { type: 1 });
            // 下面为改
            // var course4 = await Course.create({ courseName: '体育' });
            // var course5 = await Course.create({ courseName: '物理' });
            // await teacher.setCourses([course4,course5], { type: 0 });

        }
    })

    ctx.body = `<ul>
                    <li><a href="/user">user</a></li>
                    <li><a href="/info">info</a></li>
                    <li><a href="/task">task</a></li>
                    <li><a href="/address">address</a></li>
                    <li><a href="/teacher">teacher</a></li>
                    <li><a href="/course">course</a></li>
                </ul>`;
})

module.exports = router;