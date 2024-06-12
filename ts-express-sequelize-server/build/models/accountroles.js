"use strict";
module.exports = (sequelize, DataTypes) => {
    const AccountRole = sequelize.define("accountrole", {
        rolename: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    }, {
        timestamps: true,
    });
    return AccountRole;
};
