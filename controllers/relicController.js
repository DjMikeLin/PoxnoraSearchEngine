const Relic = require('../models/relic');
const helper = require('../api/helper');
//Controller for relics
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
    },
    filter: (req, res) => {
        let query = req.body.faction === '' ? {} : {factions: req.body.faction};

        Relic.find(query).then(relics => {
            helper.sort(req.body.sort, relics);
            res.render("runes/relic", { relics });
        }).catch(error => {
            console.log(error);
        });
    }
}

module.exports = relicController;