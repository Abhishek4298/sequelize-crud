const express = require("express");

const masterController = require("../controller/master.controller");


const router = express.Router();

router.get("/master/list", masterController.list);
router.post("/master/insert", masterController.insert);
router.put("/master/update/:id", masterController.update);
router.delete("/master/remove/:id", masterController.remove);

module.exports = router;
