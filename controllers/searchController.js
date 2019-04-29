const searchController = {
    show: (req, res) => {
        res.render("runes/index");
    },
    creationError:  (req, res) => {
        res.render('error', { errorMsg: "Already created this rune!" });
    }
};

module.exports = searchController;