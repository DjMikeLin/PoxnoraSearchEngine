const Champion = require('../models/champ.js');

const champController = {
    show: (req, res) => {
        Champion.find().then(champs => {

/*         let abilities = champs.map(champ => {
            champ.abilitySets.map(abilitySet => {
                console.log(abilitySet);
                abilitySet.abilities.map(ability => {
                    return ability.name;
                })
            })
        }) */
        //console.log(champs[0].abilitySets[0][0].abilities[1].name);

            res.render("runes/champ", { champs });
        }).catch(error => {
            console.log(error);
        })
    }
};

module.exports = champController;