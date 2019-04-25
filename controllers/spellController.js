const Spell = require('../models/spell.js');

const spellController = {
    show: (req, res) => {
        res.render("runes/index");
/*         Spell.find().then(spells => {
            res.render("runes/index", { spells });
        }).catch(error => {
            console.log(error);
        }) */
    }
};

module.exports = spellController;