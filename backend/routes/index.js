const { Router } = require("express");
const router = Router();
const users = require("./user.route");
const specialty = require("./specialty.route");
const buckets = require("./buckets.router");

router.use("/users", users);
router.use("/specialty", specialty);
router.use("/buckets", buckets);

module.exports = router;
