const { Router } = require("express");
const router = Router();
const users = require("./user.route");
const specialty = require("./specialty.route");

router.use("/users", users);
router.use("/specialty", specialty);

module.exports = router;
