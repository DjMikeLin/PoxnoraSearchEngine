const Equip = require('../models/equip');
const helper = require('../api/helper');
//Controller for equips
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
    },
    filter: (req, res) => {
        let query = req.body.faction === '' ? {} : {factions: req.body.faction};

        Equip.find(query).then(equips => {
            helper.sort(req.body.sort, equips);
            res.render("runes/equip", { equips });
        }).catch(error => {
            console.log(error);
        });
    }
}

module.exports = equipController;