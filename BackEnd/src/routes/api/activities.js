const router = require("express").Router()
const { getAllActivities_IdTitle } = require("../../controllers/activities.controller")

router.get("/IdTitle", getAllActivities_IdTitle)

module.exports = router