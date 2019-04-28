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
        Champion.find({_id: req.params.id}).then(champ => {
            let obj = champ[0];
            res.render("runes/rune", obj);
        })
    },
    getRuneToEdit: (req, res) => {
        Champion.find({_id: req.params.id}).then(champ => {
            let obj = champ[0];
            res.render("runes/edit", obj);
        })
    },
    edit: (req, res) => {
        Champion.updateOne({_id: req.params.id}, req.body).then(() => {
            res.redirect('/champions/' + req.params.id);
        });
    },
    delete: (req, res) => {
        Champion.deleteOne({_id: req.params.id}).then(() => {
            res.redirect('/champions');
        });
    }
};

module.exports = champController;