module.exports = function(sequelize, DataTypes) {
    return sequelize.define("course", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //非空
            autoIncrement: true, //自动递增
            primaryKey: true //主键
        },
        courseName: {
            type: DataTypes.STRING,
            field: "course_name",
            allowNull: false
        }
    })
}