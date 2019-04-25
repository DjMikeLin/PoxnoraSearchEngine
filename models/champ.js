const mongoose = require('../db/connection.js');

let Champion = mongoose.Schema({
    name: String,
    description: String,
    maxRng: Number,
    minRng: Number,
    defense: Number,
    speed: Number,
    damage: Number,
    hitPoints: Number,
    size: String,
    rarity: String,
    classes: [String],
    races: [String],
    noraCost: Number,
    hash: String,
    artist: String,
    factions: [String],
    runeSet: String,
    forSale: Boolean,
    tradeable: Boolean,
    alloweRanked: Boolean,
    deckLimit: Number,
    startingAbilities: [],
    abilitySets: [[]]
});

let champCollection = mongoose.model("champions", Champion);

module.exports = champCollection;