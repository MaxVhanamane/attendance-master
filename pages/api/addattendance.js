import connectDb from '../../middleware/mongoose';
import AttendanceRecord from '../../models/attendancerecord';
export default async function handler(req, res) {
    connectDb()

    if (req.method === "POST") {
       
            let attendance = new AttendanceRecord({
                name: req.body.name,
                email: req.body.email, 
                className: req.body.className,
                division: req.body.division,
                rollNumber: req.body.rollNumber,
                attendance: req.body.attendance,
                date: req.body.date,
                time: req.body.time,
            })
            await attendance.save()
        
        res.status(200).send({ success: "success" })
       
    }
    else {
        res.status(400).send({ error: "Not allowed" })
    }

}

