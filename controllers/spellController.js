const Spell = require('../models/spell.js');

const spellController = {
    show: (req, res) => {
        Spell.find().then(spells => {
            console.log(spells);
            res.render("runes/index", { spells });
        }).catch((error) => {
            console.log(error)
        })
    }
};

module.exports = spellController;