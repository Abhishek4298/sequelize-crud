'use strict';
module.exports = (sequelize, DataTypes) => {
	const masterSpeciality = sequelize.define('masterSpecialities', {
		specialityId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		masterId: {
			type: DataTypes.INTEGER,
			references: {
				model: "masters",
				key: "id",
			},
		}
	}, {});
	masterSpeciality.associate = function (models) {
		masterSpeciality.belongsTo(models.masters, {
			foreignKey: "masterId",
			targetKey: "id",
		});
	};
	return masterSpeciality;
};