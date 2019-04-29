let express = require('express');
let spellController = require('../controllers/spellController');
let champController = require('../controllers/champController');
let relicController = require('../controllers/relicController');
let equipController = require('../controllers/equipController');
let searchController = require('../controllers/searchController');
let router = express.Router();

router.get('/', searchController.show);

router.get('/spells', spellController.show);
router.post('/spells', spellController.create);
router.get('/spells/create', spellController.createPage);
router.get('/spells/:id', spellController.getRune);
router.put('/spells/:id', spellController.edit);
router.delete('/spells/:id', spellController.delete);
router.get('/spells/:id/edit', spellController.getRuneToEdit);

router.get('/champions', champController.show);
router.post('/champions', champController.create);
router.get('/champions/create', champController.createPage);
router.get('/champions/:id', champController.getRune);
router.put('/champions/:id', champController.edit);
router.delete('/champions/:id', champController.delete);
router.get('/champions/:id/edit', champController.getRuneToEdit);

router.get('/relics', relicController.show);
router.get('/relics/:id', relicController.getRune);
router.put('/relics/:id', relicController.edit);
router.delete('/relics/:id', relicController.delete);
router.get('/relics/:id/edit', relicController.getRuneToEdit);

router.get('/equipments', equipController.show);
router.get('/equipments/:id', equipController.getRune);
router.put('/equipments/:id', equipController.edit);
router.delete('/equipments/:id', equipController.delete);
router.get('/equipments/:id/edit', equipController.getRuneToEdit);

module.exports = router;