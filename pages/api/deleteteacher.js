import connectDb from "../../middleware/mongoose";
import User from "../../models/users";

export default async function handler(req,res){
    connectDb()
    if(req.method==="POST"){
        let deleteTeacher = await User.findByIdAndDelete(req.body._id)
        if(deleteTeacher){

            res.status(200).json({ success: true })
        }
        else{
            res.status(200).json({ success: false })
        }
    }
    else{
        res.status(405).json({success:false,"error":"Not Allowed"})
    }
}
