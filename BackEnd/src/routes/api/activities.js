const router = require("express").Router()
const { getAllActivities, getActivitiesByCategory } = require("../../controllers/activities.controller")

router.get("/", getAllActivities)
router.get("/byCategory", getActivitiesByCategory)


module.exports = router