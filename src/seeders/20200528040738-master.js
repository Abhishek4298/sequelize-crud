"use strict";

module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.bulkInsert(
			"masters",
			[
				{
					id: 110,
					desciption: "Hello this is master one",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 111,
					desciption: "Hello this is master two",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 112,
					desciption: "Hello this is master three",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		),

	down: (queryInterface, Sequelize) =>
		queryInterface.bulkDelete("masters", null, {}),
};
