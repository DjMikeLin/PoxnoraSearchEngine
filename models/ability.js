const mongoose = require('../db/connection.js');

let Ability = mongoose.Schema({
    default: Boolean,
    id: Number,
    apCost: 0,
    name: String,
    shortDescription: String,
    activationType: Number,
    level: Number,
    cooldown: Number,
    noraCost: Number,
    iconName: String
});

let AbilityCollection = mongoose.model("abilities", Ability);

module.exports = AbilityCollection;