module.exports = function(sequelize, DataTypes) {
    return sequelize.define("task", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //非空
            autoIncrement: true, //自动递增
            primaryKey: true //主键
        },
        taskName: {
            type: DataTypes.STRING,
            field: "task_name",
            allowNull: false
        }
    })
}