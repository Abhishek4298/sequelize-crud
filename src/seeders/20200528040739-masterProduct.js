"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "masterProducts",
      [
        {
					productAndServiceId:1111,
					masterId:110,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
					productAndServiceId:2222,
					masterId:111,
          createdAt: new Date(),
          updatedAt: new Date(),
				},
				{
					productAndServiceId:3333,
					masterId:112,				
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("masterProducts", null, {}),
};
