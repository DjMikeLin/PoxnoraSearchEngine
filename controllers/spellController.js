const Spell = require('../models/spell');
const helper = require('../api/helper');
//Controller for spells
const spellController = {
    show: (req, res) => {
        Spell.find().then(spells => {
            res.render("runes/spell", { spells });
        }).catch(error => {
            console.log(error);
        })
    },
    getRune: (req, res) => {
        Spell.find({_id: req.params.id}).then(spell => {
            let obj = spell[0];
            res.render("runes/rune", obj);
        })
    },
    filter: (req, res) => {
        let query = req.body.faction === '' ? {} : {factions: req.body.faction};

        Spell.find(query).then(spells => {
            helper.sort(req.body.sort, spells);
            res.render("runes/spell", { spells });
        }).catch(error => {
            console.log(error);
        });
    }
};

module.exports = spellController;