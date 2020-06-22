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
	try {
		const rem = await db.masters.destroy({
			where: {
				id: req.params.id,
			},
		});
		return successResponse(req, res, { rem });
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

exports.update = async function (req, res) {
	try {
		const up = await db.masters.update(
			{ desciption: req.body.desciption },
			{
				where: {
					id: req.params.id,
				},
			}
		);
		console.log("update done successfully");
		return successResponse(req, res, { up });
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};
