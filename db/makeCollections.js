let Champ = require('../models/champ');
let Ability = require('../models/ability');

let abilitySet = new Set();
let uniqueAbilities = [];
//Seeds abilities collection with unique abilities
Champ.find().then(champs => {
    champs.forEach(champ => {
        champ.startingAbilities.forEach(ability => {
            if(!abilitySet.has(ability.id)){
                uniqueAbilities.push(ability);
                abilitySet.add(ability.id);
            }
        });
        
        champ.abilitySets.forEach(e => {
            e.forEach(ele => {
                ele.abilities.forEach(ability => {
                    if(!abilitySet.has(ability.id)){
                        uniqueAbilities.push(ability);
                        abilitySet.add(ability.id);
                    }
                })
            })
        })
    });

    Ability.create(uniqueAbilities);
    console.log("Finished Creating and Seeding!");
});