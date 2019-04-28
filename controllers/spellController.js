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
        Spell.updateOne({_id: req.params.id}, req.body).then(() => {
            res.redirect('/spells/' + req.params.id);
        });
    },
    delete: (req, res) => {
        Spell.deleteOne({_id: req.params.id}).then(() => {
            res.redirect('/spells');
        });
    }
};

module.exports = spellController;