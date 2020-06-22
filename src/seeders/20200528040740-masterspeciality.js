"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "masterSpecialities",
      [
        {
					specialityId:10,
					masterId:110,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
					specialityId:11,
					masterId:111,
          createdAt: new Date(),
          updatedAt: new Date(),
				},
				{
					specialityId:12,
					masterId:112,				
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("masterSpecialities", null, {}),
};
