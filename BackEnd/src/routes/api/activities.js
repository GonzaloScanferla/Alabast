const router = require("express").Router()
const { getAllActivities, getActivitiesByCategory, getAllCategories } = require("../../controllers/activities.controller")

router.get("/", getAllActivities)
router.get("/byCategory", getActivitiesByCategory)
router.get("/categories", getAllCategories)


module.exports = router