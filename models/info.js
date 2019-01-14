module.exports = function(sequelize, DataTypes) {
    return sequelize.define("info", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //非空
            autoIncrement: true, //自动递增
            primaryKey: true //主键
        },
        email: {
            type: DataTypes.STRING,
            field: "email",
            allowNull: false
        },
        sex: {
            type: DataTypes.STRING,
            field: "sex",
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            field: "phone",
            allowNull: false
        }
    })
}