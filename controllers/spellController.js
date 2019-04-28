const Spell = require('../models/spell');

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
    getRuneToEdit: (req, res) => {
        Spell.find({_id: req.params.id}).then(spell => {
            let obj = spell[0];
            res.render("runes/edit", obj);
        })
    },
    edit: (req, res) => {
        console.log(req.body);
        //Spell.replaceOne({_id: req.params.id}, ).then
        res.send("test");
        //res.render("runes/rune");
    }
};

module.exports = spellController;