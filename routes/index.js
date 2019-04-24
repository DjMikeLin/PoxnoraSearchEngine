let express = require('express');
let spellController = require('../controllers/spellController.js');
let router = express.Router();

router.get('/', spellController.show);

module.exports = router;