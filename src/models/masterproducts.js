'use strict';
module.exports = (sequelize, DataTypes) => {
	const masterProducts = sequelize.define('masterProducts', {
		productAndServiceId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		masterId: {
			type: DataTypes.INTEGER,
			references: {
				model: "masters",
				key: "id",
			},
		},
	}, {});
	masterProducts.associate = function (models) {
		masterProducts.belongsTo(models.masters, {
			foreignKey: "masterId",
			targetKey: "id",
		});
	};
	return masterProducts;
};