const searchController = {
    show: (req, res) => {
        res.render("runes/index");
    },
    option: (req, res) => {
        switch(req.body.option){
            case "champions":
                res.redirect('/champs');
                break;
            case "spells":
                res.redirect('/spells');
                break;
            case "relics":
                res.redirect('/relics');
                break;
            case "equipments":
                res.redirect('/equips');
                break;
            default:
                //document.querySelector('#errorMessage').innerHTML = "Pick an option!";
                return;
        }
    }
};

module.exports = searchController;