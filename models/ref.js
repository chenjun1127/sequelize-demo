const { sequelize } = require("../db");
var User = sequelize.import("./user");
var Task = sequelize.import("./task");
var Address = sequelize.import("./address");
var Info = sequelize.import("./info");
var Teacher = sequelize.import("./teacher");
var Course = sequelize.import("./course");
// var TeacherCourse = sequelize.import("./teacherCourse");
 



//建立模型之间关联关系
Task.belongsTo(User)
User.hasMany(Task);
Address.belongsTo(User)
User.hasMany(Address);
Info.belongsTo(User);
User.hasOne(Info);
// 多对多
Teacher.belongsToMany(Course, { through: 'TeacherCourse' ,foreignKey: 'teacher_id'  })
Course.belongsToMany(Teacher, { through: 'TeacherCourse' ,foreignKey: 'course_id' })
 
//创建表
sequelize.sync({ force: false });