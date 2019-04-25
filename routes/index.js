let express = require('express');
let spellController = require('../controllers/spellController');
let searchController = require('../controllers/searchController');
let router = express.Router();

router.get('/', searchController.show);

module.exports = router;