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
    },
    createPage: (req, res) => {
        let champ = {
            name: "Abomination",
            description: "A mind is a terrible thing to waste. So is a spleen, a kidney, a liver, an eye... - Xulos, Undead Sage",
            maxRng: 1,
            minRng: 1,
            defense: 2,
            speed: 6,
            damage: 12,
            hitPoints: 55,
            size: "1x1",
            rarity: "UNCOMMON",
            classes: ["Brute"],
            races: ["Undead", "Zombie"],
            noraCost: 70,
            hash: "cj9Ej9Dj9CG2BG2Aj9Cj9Dj9Eeeeerzzgvqhtmnj",
            artist: "James Ryman",
            factions: ["Forsaken Wastes"],
            runeSet: "Pox Nora Release Set",
            forSale: "true",
            tradeable: "true",
            alloweRanked: "true",
            deckLimit: 2,
            startingAbilities: [
                {
                    apCost: 0, 
                    name: "Attack Physical",
                    shortDescription: "This unit makes a Physical attack at its range. This is a basic attack.",
                    activationType: 3,
                    level: 0,
                    cooldown: 0,
                    noraCost: 2,
                    iconName: "physical"
                },
                {
                    apCost: 0,
                    name: "Zombie Apocalypse",
                    shortDescription: "This champion has <ability value=43>Immunity: Disease</ability>.  While you control at least 5 Zombies, this unit gains <ability value=2147>Swarm: Festering Corpse</ability>.",
                    activationType: 0,
                    level: 0,
                    cooldown: 0,
                    noraCost: 4,
                    iconName: "zombie_apoc"
                }
            ],
            abilitySets: [[]]
        };
        res.render("runes/create", champ);
    },
    create: (req, res) => {
        Champion.create(req.body).then(() => {
            res.redirect("/champions");
        });
    }
};

module.exports = champController;