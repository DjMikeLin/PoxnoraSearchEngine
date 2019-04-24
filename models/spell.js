const mongoose = require('../db/connection.js');

let Spell = mongoose.Schema({
    name: String,
    description: String,
    flavorText: String,
    noraCost: Number,
    artist: String,
    factions: [String],
    rarity: String,
    cooldown: Number,
    runeSet: String,
    forSale: Boolean,
    alloweRanked: Boolean,
    tradeable: Boolean,
    hash: String,
    deckLimit: Number
});

let spellCollection = mongoose.model("spell", Spell);
// export the donut model with module.exports
module.exports = spellCollection;