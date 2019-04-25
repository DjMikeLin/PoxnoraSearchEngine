let express = require('express');
let spellController = require('../controllers/spellController');
let champController = require('../controllers/champController');
let searchController = require('../controllers/searchController');
let router = express.Router();

router.get('/', searchController.show);
router.post('/', searchController.option);

router.get('/spells', spellController.show);

router.get('/champs', champController.show);

module.exports = router;