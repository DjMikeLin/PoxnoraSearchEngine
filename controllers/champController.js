const Champion = require('../models/champ');
const Ability = require('../models/ability');
const Class = require('../models/class');
const Race = require('../models/race');
const helper = require('../api/helper');
//Controller for champs
const champController = {
    show: (req, res) => {
        Champion.find().then(champs => {
            Ability.find().then(abilities => {
                Class.find().then(classes => {
                    Race.find().then(races => {
                        helper.sortByNameAndLevel(abilities);
                        res.render("runes/champ", { classes, races, champs, abilities });
                    })
                })
            })
        }).catch(error => {
            console.log(error);
        })
    },
    getRune: (req, res) => {
        Champion.find({_id: req.params.id}).then(champ => {
            let obj = champ[0];
            res.render("runes/rune", obj);
        })
    },
    filter: (req, res) => {
        let query1 = req.body.faction === '' ? {} : {factions: req.body.faction};
        let query2 = req.body.ability === '' ? {} : {startingAbilities: { $elemMatch: {name: req.body.ability }}};
        let query3 = req.body.ability === '' ? {} : {abilitySets: { $elemMatch: { abilities: {$elemMatch: {name: req.body.ability}}}}};
        let query4 = req.body.class === '' ? {} : {classes: req.body.class};
        let query5 = req.body.race === '' ? {} : {races: req.body.race};

        Champion.find({
            $and: [
                query1,
                { $or: [query2, query3]},
                query4,
                query5
            ]
        }).then(champs => {
            helper.sort(req.body.sort, champs);
            Ability.find().then(abilities => {
                Class.find().then(classes => {
                    Race.find().then(races => {
                        helper.sortByNameAndLevel(abilities);
                        res.render("runes/champ", { classes, races, champs, abilities });
                    })
                })
            })
        }).catch(error => {
            console.log(error);
        });
    }
};

module.exports = champController;