const Ability = require('../models/ability');
const helper = require('../api/helper');
//Controller for relics
const AbilityController = {
    show: (req, res) => {
        Ability.find().then(abilities => {
            res.render("runes/ability", { abilities });
        }).catch(error => {
            console.log(error);
        })
    },
    getRune: (req, res) => {
        Ability.find({id: req.params.id}).then(ability => {
            res.render("runes/rune", ability[0]);
        })
    }/*,
    filter: (req, res) => {
        let query = req.body.faction === '' ? {} : {factions: req.body.faction};

        Relic.find(query).then(relics => {
            helper.sort(req.body.sort, relics);
            res.render("runes/relic", { relics });
        }).catch(error => {
            console.log(error);
        });
    }*/
}

module.exports = AbilityController;
