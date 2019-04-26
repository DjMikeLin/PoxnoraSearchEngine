let express = require('express');
let spellController = require('../controllers/spellController');
let champController = require('../controllers/champController');
let relicController = require('../controllers/relicController');
let equipController = require('../controllers/equipController');
let searchController = require('../controllers/searchController');
let router = express.Router();

router.get('/', searchController.show);

router.get('/spells', spellController.show);

router.get('/champions', champController.show);
router.get('/champions/:id', champController.getRune);

router.get('/relics', relicController.show);

router.get('/equipments', equipController.show);

module.exports = router;