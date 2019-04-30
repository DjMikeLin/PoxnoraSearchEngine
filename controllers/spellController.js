const Spell = require('../models/spell');
const helper = require('../api/helper');
//Controller for spells
const spellController = {
    show: (req, res) => {
        Spell.find().then(spells => {
            res.render("runes/spell", { spells });
        }).catch(error => {
            console.log(error);
        })
    },
    getRune: (req, res) => {
        Spell.find({_id: req.params.id}).then(spell => {
            let obj = spell[0];
            res.render("runes/rune", obj);
        })
    },
    getRuneToEdit: (req, res) => {
        Spell.find({_id: req.params.id}).then(spell => {
            let obj = spell[0];
            res.render("runes/edit", obj);
        })
    },
    edit: (req, res) => {
        Spell.updateOne({_id: req.params.id}, req.body).then(() => {
            Spell.updateOne({_id: req.params.id}, helper.findFactions(req.body.faction1, req.body.faction2)).then(() => {
                res.redirect('/spells/' + req.params.id);
            });
        });

        Spell.updateOne({_id: req.params.id}, req.body).then(() => {
            res.redirect('/spells/' + req.params.id);
        });
    },
    delete: (req, res) => {
        Spell.deleteOne({_id: req.params.id}).then(() => {
            res.redirect('/spells');
        });
    },
    createPage: (req, res) => {
        //Creates a spell obj called "Acid Storm"
        let spell = {
            name: "Acid Storm",
            description: "Area Effect 3: Units take 10 Acid damage and become <condition value=scoured>Scoured</condition> for 2 turns.",
            flavorText: "\"Wait a moment. Give it a little time to work its way down under their leaves and bark. Cutting treefolk down is far easier if they're already rotting on the inside.\" - Kedrell, Blackscale Centurion ",
            noraCost: 45,
            artist: "Jakub Kasper",
            factions: ["Sundered Lands"],
            rarity: "COMMON",
            cooldown: 9,
            runeSet: "Wild Alliance",
            forSale: "true",
            allowRanked: "true",
            tradeable: "true",
            hash: "ej9Dj9Ce9AF0Ae9BG2Bj9Fj9Gqwtmnllnwonytqf",
            deckLimit: 2
        };
        res.render("runes/create", spell);
    },
    create: (req, res) => {
        Spell.find({name: req.body.name}).then(element => {
            if(element.length === 0){//if the rune doesn't exist
                Spell.create(req.body).then((element) => {
                    Spell.updateOne({name: element.name}, helper.findFactions(req.body.faction1, req.body.faction2)).then(() => {
                        res.redirect("/spells");
                    });
                });
            }
            else
                res.redirect('/spells/error');
        });
    }
};

module.exports = spellController;