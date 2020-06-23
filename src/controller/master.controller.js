const db = require("../models");
const { successResponse, errorResponse } = require("../helper/index");

exports.list = async function (req, res) {
	await db.masters.findAll(
		{
			include: [
				{
					model: db.masterProducts,
				},
				{
					model: db.masterSpecialities,
				}
			],
		}
	).then((masterData) => res.send(masterData));
};

exports.insert = async function (req, res) {
	try {
		id = { id: req.body.id };
		desciption = { desciption: req.body.desciption };

		const payload = { ...id, ...desciption };

		const createMaster = await db.masters.create(payload);

		return successResponse(req, res, { createMaster });
	} catch (error) {
		return errorResponse(
			req,
			res,
			error.message,
			error.message === "Some thing went wrong!" ? 400 : 500
		);
	}
};

exports.remove = async function (req, res) {

	const { id } = req.params;

	const response = await db.masters.findAll(
		{
			where: {
				id
			},
			include: [
				{
					model: db.masterProducts,
				},
				{
					model: db.masterSpecialities,
				}
			],
		}
	)
	await db.masters.destroy(
		{
			where: {
				id
			}
		}
	);
	return successResponse(req, res, { response });
};

exports.update = async function (req, res) {
	try {
		const { id } = req.params;

		await db.masters.update(
			{ desciption: req.body.desciption },
			{
				where: {
					id
				},
			}
		);
		const response = await db.masters.findAll(
			{
				where: {
					id
				},
				include: [
					{
						model: db.masterProducts,
					},
					{
						model: db.masterSpecialities,
					}
				],
			}
		)
		console.log("update done successfully");
		return successResponse(req, res, { response });
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};
