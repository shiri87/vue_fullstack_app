const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const me = sequelize.define('me', {
        firstName: { type: DataTypes.STRING },
        lastName: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
    })
    return me;
}
