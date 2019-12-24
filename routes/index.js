let express = require('express');
let spellController = require('../controllers/spellController');
let champController = require('../controllers/champController');
let relicController = require('../controllers/relicController');
let equipController = require('../controllers/equipController');
let searchController = require('../controllers/searchController');
let abilityController = require('../controllers/abilityController');
let router = express.Router();
//Route for homepage
router.get('/', searchController.show);
//Routes for spells
router.get('/spells', spellController.show);
router.post('/spells', spellController.filter);
router.get('/spells/:id', spellController.getRune);
//Routes for champions
router.get('/champions', champController.show);
router.post('/champions', champController.filter);
router.get('/champions/:id', champController.getRune);
//Routes for relics
router.get('/relics', relicController.show);
router.post('/relics', relicController.filter);
router.get('/relics/:id', relicController.getRune);
//Routes for equipments
router.get('/equipments', equipController.show);
router.post('/equipments', equipController.filter);
router.get('/equipments/:id', equipController.getRune);
//Routes for abilities
router.get('/abilities', abilityController.show);
router.get('/abilities/:id', abilityController.getRune);

module.exports = router;
