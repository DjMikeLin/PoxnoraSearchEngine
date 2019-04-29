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
            let factions = [req.body.faction1];
            if(req.body.faction2.length !== 0){//If faction2 exists
                factions.push(req.body.faction2);
            }
            Equip.updateOne({_id: req.params.id}, { factions: factions}).then(() => {
                res.redirect('/equipments/' + req.params.id);
            });
        });
    },
    delete: (req, res) => {
        Equip.deleteOne({_id: req.params.id}).then(() => {
            res.redirect('/equipments');
        });
    },
    createPage: (req, res) => {
        //Creates a equip obj called "Akakios's Blade"
        let equip = {
            name: "Akakios's Blade",
            description: "Equipped champion gains <ability value=165>Rend 3</ability>. If it has Race: Draksar, it also gains <ability value=591>Flamestrike</ability>.",
            flavorText: "The Blade of Lord Akakios is said to be the first blade forged under his rule. Some believe it was pilfered from the ruins of the kingdom he usurped.",
            noraCost: 25,
            artist: "Anthony Lopes",
            factions: ["Sundered Lands"],
            rarity: "RARE",
            runeSet: "Ancient Awakenings",
            forSale: "true",
            alloweRanked: "true",
            tradeable: "true",
            hash: "ej9Cj9BG2AE8Df1BG2Aj9Bj9Ceerzohegipqzvqf",
            deckLimit: 2
        };
        res.render("runes/create", equip);
    },
    create: (req, res) => {
        Equip.find({name: req.body.name}).then(element => {
            if(element.length === 0){//if the rune doesn't exist
                Equip.create(req.body).then(() => {
                    res.redirect("/equipments");
                });
            }
            else
                res.redirect('/equipments/error');
        });
    }
}

module.exports = equipController;