//faction1, faction2 both strings. Returns an object with 1 key of factions and value of an Array
function findFactions(faction1, faction2){
    let factions = [faction1];
    if(faction2.length !== 0){//If faction2 exists
        factions.push(faction2);
    }
    return { factions: factions };
}

module.exports = {
    findFactions
};