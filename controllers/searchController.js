const spells = require('../controllers/spellController');

const searchController = {
    show: (req, res) => {
        res.render("runes/index");
    },
    option: (req, res) => {
        switch(req.body.option){
            case "champions":
                
                break;
            case "spells":
                res.redirect('/spells');
                break;
            case "relics":
                
                break;
            case "equipments":

                break;
            default:
                //document.querySelector('#errorMessage').innerHTML = "Pick an option!";
                return;
        }
    }
};

module.exports = searchController;