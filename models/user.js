module.exports = function(sequelize, DataTypes) {
    return sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //非空
            autoIncrement: true, //自动递增
            primaryKey: true //主键
        },
        name: {
            type: DataTypes.STRING,
            field: "name",
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            field: "age",
            allowNull: false
        }
    })
}