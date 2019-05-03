const mongoose = require('../db/connection.js');

let Race = mongoose.Schema({
    name: String
});

let RaceCollection = mongoose.model("races", Race);

module.exports = RaceCollection;