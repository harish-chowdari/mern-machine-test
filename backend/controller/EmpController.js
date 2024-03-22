const empModel = require("../model/EmpModel")

const port=4115

function uploadImage(req,res) {
    return res.status(200).json({
        success:true,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
}







module.exports = {
    uploadImage,
   

}