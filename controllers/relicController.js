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
            let factions = [req.body.faction1];
            if(req.body.faction2.length !== 0){//If faction2 exists
                factions.push(req.body.faction2);
            }
            Relic.updateOne({_id: req.params.id}, { factions: factions}).then(() => {
                res.redirect('/relics/' + req.params.id);
            });
        });
    },
    delete: (req, res) => {
        Relic.deleteOne({_id: req.params.id}).then(() => {
            res.redirect('/relics');
        });
    },
    createPage: (req, res) => {
        //Creates a relic obj called "Altar of Bones"
        let relic = {
            name: "Altar of Bones",
            description: "This relic has Bone Altar (<mechanic value=sacrifice>Sacrifice</mechanic> target champion you own within 4 spaces with Race: Skeleton, friendly Skeletons gain +4 HP and +1 DMG.).",
            flavorText: "\"We give this offering to you, Lord Serkan. Please, bless our soldiers with power! Fill them with your strength!\" - Tachrim, apprentice to Xulos",
            noraCost: 25,
            artist: "Alex Fang",
            factions: ["Forsaken Wastes"],
            rarity: "UNCOMMON",
            runeSet: "Heroes of Maljara",
            forSale: "true",
            alloweRanked: "true",
            tradeable: "true",
            defense: 0,
            hitPoints: 20,
            size: "1x1",
            hash: "ej9AJ8JE8DE8DG2Af1Aj9Ej9Fgnuxvsuqsfpufpf",
            deckLimit: 2
        };
        res.render("runes/create", relic);
    },
    create: (req, res) => {
        Relic.find({name: req.body.name}).then(element => {
            if(element.length === 0){//if the rune doesn't exist
                Relic.create(req.body).then(() => {
                    res.redirect("/relics");
                });
            }
            else
                res.redirect('/relics/error');
        });
    }
}

module.exports = relicController;