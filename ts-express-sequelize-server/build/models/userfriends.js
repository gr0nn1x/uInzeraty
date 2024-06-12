"use strict";
module.exports = (sequelize, DataTypes) => {
    const Friends = sequelize.define("userfriends", {
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    }, {
        timestamps: true,
    });
    return Friends;
};
