const EmpSchema = require("../model/EmpModel")


const port=4115 

function uploadImage(req,res) {
    return res.status(200).json({
        success:true,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
}



async function postEmp(req,res) {
    
    try
    {
        const {name, email, mobile, designation, gender, courses, image} = req.body

        const Data = new EmpSchema({
        name, 
        email,
        mobile, 
        designation, 
        gender, 
        courses, 
        image

    })

        const d = await Data.save()
        console.log(d)
        return res.status(200).json({success:true, d})
        
    }

    catch(err)
    {
        console.log({error : "Internal server error"})
        return res.status(500).json({error : "Internal server error"}) 
    }

}



async function getEmp(req,res) {

    try
    {
        const Data = await EmpSchema.find().select("-_id")

        res.json(Data)
    }

    catch(err)
    {
        console.log({error : "Internal server error"})
        return res.status(500).json({error : "Internal server error"}) 
    }
    
}

module.exports = {
    uploadImage,
    postEmp,
    getEmp
}