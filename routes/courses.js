const express = require("express");
const router = express.Router();
const supabase = require("../supaBaseClient");

router.get("/courses", async (req, res) => {

  const { data, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});


router.get("/courses/:id/enrollments", async (req, res) => {

  const courseId = req.params.id;

  const { data, error } = await supabase
    .from("enrollments")
    .select("*")
    .eq("course_id", courseId);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);

});

module.exports = router;