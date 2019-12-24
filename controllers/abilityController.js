const Ability = require('../models/ability');
const helper = require('../api/helper');
//Controller for abilities
const AbilityController = {
    show: (req, res) => {
        Ability.find().then(abilities => {
            helper.sortByNameAndLevel(abilities) 
            res.render("runes/ability", { abilities });
        }).catch(error => {
            console.log(error);
        })
    },
    getRune: (req, res) => {
        Ability.find({id: req.params.id}).then(ability => {
            res.render("runes/rune", ability[0]);
        })
    }
}

module.exports = AbilityController;
