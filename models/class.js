const mongoose = require('../db/connection.js');

let Class = mongoose.Schema({
    name: String
});

let ClassCollection = mongoose.model("classes", Class);

module.exports = ClassCollection;