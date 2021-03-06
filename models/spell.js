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

let spellCollection = mongoose.model("spells", Spell);

module.exports = spellCollection;