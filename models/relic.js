const mongoose = require('../db/connection.js');

let Relic = mongoose.Schema({
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
    defense: Number,
    hitPoints: Number,
    size: String,
    hash: String,
    deckLimit: Number
});

let relicCollection = mongoose.model("relics", Relic);

module.exports = relicCollection;