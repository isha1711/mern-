const express = require("express");
const getalltask = require("../controllers/main");
const router = express.Router();


router.route("/").get(getalltask).post(createtask);
// router.route("/task").get().patch(updatetask).delete(deletetask);

module.exports = router;
