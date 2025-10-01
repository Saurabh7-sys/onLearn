const getBlogs = (req , res) => {
    console.log("blog route was hit");
    res.send(" here are the blogs");
};

module.exports = {getBlogs}