const Champion = require('../models/champ.js');

const champController = {
    show: (req, res) => {
        Champion.find().then(champs => {
            res.render("runes/champ", { champs });
        }).catch(error => {
            console.log(error);
        })
    }
};

module.exports = champController;