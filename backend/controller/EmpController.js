const EmpSchema = require("../model/EmpModel")



async function postEmp(req,res) {
    
    try
    {
        const {name, email, mobile, designation, gender, course, image} = req.body

        const Data = new EmpSchema({
        name, 
        email,
        mobile, 
        designation, 
        gender, 
        course, 
        image

    })

        const d = await Data.save()
        res.json(d)
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
    postEmp,
    getEmp
}