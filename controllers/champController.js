const Champion = require('../models/champ.js');

const champController = {
    show: (req, res) => {
        Champion.find().then(champs => {
            res.render("runes/champ", { champs });
        }).catch(error => {
            console.log(error);
        })
    },
    getRune: (req, res) => {
        Champion.find({id: parseInt(req.params.id)}).then(champ => {
            let obj = champ[0];
            res.render("runes/rune", obj);
        })
    }
};

module.exports = champController;