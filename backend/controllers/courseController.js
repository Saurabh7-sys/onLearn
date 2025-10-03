const Course = require("../models/Course");

exports.getCourse = async (req, res) => {
    try {
        const { category } = req.query;
        const filter = category ? { categoryId: Number(category) } : {};
        const courses = await Course.find(filter);
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: "Server error " })
    }
}