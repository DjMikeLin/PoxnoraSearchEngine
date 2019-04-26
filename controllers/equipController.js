const Equip = require('../models/equip');

const equipController = {
    show: (req, res) => {
        Equip.find().then(equips => {
            res.render("runes/equip", { equips });
        }).catch(error => {
            console.log(error);
        })
    }
}

module.exports = equipController;