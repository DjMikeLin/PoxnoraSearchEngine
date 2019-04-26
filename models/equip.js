const mongoose = require('../db/connection.js');

let Equip = mongoose.Schema({
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
    hash: String,
    deckLimit: Number
});

let equipCollection = mongoose.model("equips", Equip);

module.exports = equipCollection;