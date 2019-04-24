const Spell = require('../models/spell.js');

const spellController = {
    show: (req, res) => {
        Spell.find().then((spells) => {
            res.render(spells);
        });
    }
};

module.exports = spellController;