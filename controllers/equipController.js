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
    },
    getRuneToEdit: (req, res) => {
        Equip.find({_id: req.params.id}).then(equip => {
            let obj = equip[0];
            res.render("runes/edit", obj);
        })
    },
    edit: (req, res) => {
        Equip.updateOne({_id: req.params.id}, req.body).then(() => {
            res.redirect('/equipments/' + req.params.id);
        });
    },
    delete: (req, res) => {
        Equip.deleteOne({_id: req.params.id}).then(() => {
            res.redirect('/equipments');
        });
    },
    createPage: (req, res) => {
        let equip = {
            name: String,
            description: String,
            flavorText: String,
            noraCost: Number,
            artist: String,
            factions: [String],
            rarity: String,
            runeSet: String,
            forSale: Boolean,
            alloweRanked: Boolean,
            tradeable: Boolean,
            hash: String,
            deckLimit: Number
        };
        res.render("runes/create", spell);
    },
    create: (req, res) => {
        Spell.create(req.body).then(() => {
            res.redirect("/spells");
        });
    }
}

module.exports = equipController;