const { Router } = require("express");
const router = Router();
const users = require("./user.route");

router.use("/users", users);

module.exports = router;
