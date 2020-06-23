'use strict';
module.exports = (sequelize, DataTypes) => {
  const master = sequelize.define('masters', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull:false
			
		},
    desciption:{
			type: DataTypes.STRING,
			allowNull: false,
		}
  }, {});
  master.associate = function(models) {
		master.hasMany(models.masterProducts, { foreignKey: "masterId" });
    master.hasMany(models.masterSpecialities, { foreignKey: "masterId" });
	};
  return master;
};
