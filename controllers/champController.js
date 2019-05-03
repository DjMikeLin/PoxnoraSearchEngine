const Champion = require('../models/champ');
const Ability = require('../models/ability');
const helper = require('../api/helper');
//Controller for champs
const champController = {
    show: (req, res) => {
        Champion.find().then(champs => {
            Ability.find().then(abilities => {
                abilities.sort((a, b) => {
                    if(a.name.toLowerCase() < b.name.toLowerCase())
                        return -1;
                    else if(a.name.toLowerCase() > b.name.toLowerCase())
                        return 1;
                    
                    return parseInt(a.level) < parseInt(b.level) ? -1 : 1;
                });
                res.render("runes/champ", { champs, abilities });
            })
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
            Champion.updateOne({_id: req.params.id}, helper.findFactions(req.body.faction1, req.body.faction2)).then(() => {
                res.redirect('/champions/' + req.params.id);
            });
        });
    },
    delete: (req, res) => {
        Champion.deleteOne({_id: req.params.id}).then(() => {
            res.redirect('/champions');
        });
    },
    createPage: (req, res) => {
        //Creates a champ obj called "Abomination"
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
        Champion.find({name: req.body.name}).then(element => {
            if(element.length === 0){//if the rune doesn't exist
                Champion.create(req.body).then((element) => {
                    Champion.updateOne({name: element.name}, helper.findFactions(req.body.faction1, req.body.faction2)).then(() => {
                        res.redirect("/champions");
                    });
                });
            }
            else
                res.redirect('/champions/error');
        });
    },
    filter: (req, res) => {
        let query1 = req.body.faction === '' ? {} : {factions: req.body.faction};
        let query2 = req.body.ability === '' ? {} : {startingAbilities: { $elemMatch: {name: req.body.ability }}};
        let query3 = req.body.ability === '' ? {} : {abilitySets: { $elemMatch: { abilities: {$elemMatch: {name: req.body.ability}}}}};
        
        Champion.find({
            $and: [
                query1,
                { $or: [query2, query3]}
            ]
        }).then(champs => {
            sort(req.body.sort, champs);
            res.render("runes/champ", { champs });
        }).catch(error => {
            console.log(error);
        });
    }
};

function sort(option, runes){
    switch(option){
        case "descend":
            sortByNoraDescending(runes);
            break;
        case "ascend":
            sortByNoraAscending(runes);
            break;
        case "name":
            sortByName(runes);
            break;
        default:
            return null;
    }
    return runes;
}

function sortByNoraAscending(runes){
    runes.sort((a, b) => {
        return b.noraCost - a.noraCost;
    });
    return runes; 
}

function sortByNoraDescending(runes){
    runes.sort((a, b) => {
        return a.noraCost - b.noraCost;
    });
    return runes; 
}

function sortByName(runes){
    runes.sort((a, b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase())
            return -1;
        else if(a.name.toLowerCase() > b.name.toLowerCase())
            return 1;
        
        return 0;
    });
    return runes;
}

module.exports = champController;