const express = require("express")
const router = express.Router()
const multer = require("multer")

const empController = require("../controller/EmpController")

const path = require("path")
 


const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: function(req,file,cb) {
        cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

router.use("/images", express.static("upload/images"))


router.post("/upload", upload.single("product"), empController.uploadImage)
 



module.exports=router