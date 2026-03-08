const express = require("express");
const router = express.Router();
const supabase = require("../middleware/validateEnrollment")

router.get("/courses",async(req,res)=>{
    const{data,error} = await supabase
    .from("courses")
    .select("*")

    if(error){
        return
        res.status(500).json({error:error.message})
    }
    res.json({
        message:"Student enrolled successfully",
        
    })
    
});

router.get("/courses/:id/enrollments",
    async (req,res)=>{
        const courseId = req.params.id;
        
        const {data,error} = await supabase
            .from("enrollments")
            .select("*")
            .eq("course_id",courseid);

            if (error){
                return res.status(500).json({error: error.message})
            }
            res.json.(data);
            
        
    }
);

module.exports = router;