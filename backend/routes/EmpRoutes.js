const express = require("express")
const router = express.Router()

const EmpController = require("../controller/EmpController")



router.post("/emp", EmpController.postEmp)


router.get("/empdetails", EmpController.getEmp)


module.exports = router
