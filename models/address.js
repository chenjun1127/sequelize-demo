module.exports = function(sequelize, DataTypes) {
    return sequelize.define("address", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //非空
            autoIncrement: true, //自动递增
            primaryKey: true //主键
        },
        province: {
            type: DataTypes.STRING,
            field: "province",
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            field: "city",
            allowNull: false
        },
        detail: {
            type: DataTypes.STRING,
            field: "detail",
            allowNull: false
        }
    })
}