const Relic = require('../models/relic');

const relicController = {
    show: (req, res) => {
        Relic.find().then(relics => {
            res.render("runes/relic", { relics });
        }).catch(error => {
            console.log(error);
        })
    },
    getRune: (req, res) => {
        Relic.find({_id: req.params.id}).then(relic => {
            res.render("runes/rune", relic[0]);
        })
    },
    getRuneToEdit: (req, res) => {
        Relic.find({_id: req.params.id}).then(relic => {
            let obj = relic[0];
            res.render("runes/edit", obj);
        })
    },
    edit: (req, res) => {
        Relic.updateOne({_id: req.params.id}, req.body).then(() => {
            res.redirect('/relics/' + req.params.id);
        });
    },
    delete: (req, res) => {
        Relic.deleteOne({_id: req.params.id}).then(() => {
            res.redirect('/relics');
        });
    }
}

module.exports = relicController;