const Equip = require('../models/equip');

const equipController = {
    show: (req, res) => {
        Equip.find().then(equips => {
            res.render("runes/equip", { equips });
        }).catch(error => {
            console.log(error);
        })
    },
    getRune: (req, res) => {
        Equip.find({_id: req.params.id}).then(equip => {
            let obj = equip[0];
            res.render("runes/rune", obj);
        })
    }
}

module.exports = equipController;