const router = require("express").Router()
const { getAllActivities } = require("../../controllers/activities.controller")

router.get("/", getAllActivities)

module.exports = router