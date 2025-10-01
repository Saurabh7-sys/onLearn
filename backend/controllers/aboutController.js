const getAbout = (req, res) => {
    console.log("About route hit");
    res.send("About onLearn");
}

module.exports = { getAbout }