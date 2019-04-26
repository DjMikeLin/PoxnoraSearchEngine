const Relic = require('../models/relic');

const relicController = {
    show: (req, res) => {
        Relic.find().then(relics => {
            res.render("runes/relic", { relics });
        }).catch(error => {
            console.log(error);
        })
    },
    getRune: (req, res) => {
        Relic.find({_id: req.params.id}).then(relic => {
            res.render("runes/rune", relic[0]);
        })
    }
}

module.exports = relicController;