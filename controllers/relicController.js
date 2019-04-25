const Relic = require('../models/relic');

const relicController = {
    show: (req, res) => {
        Relic.find().then(relics => {
            console.log(relics);
            res.render("runes/relic", { relics });
        }).catch(error => {
            console.log(error);
        })
    }
}

module.exports = relicController;