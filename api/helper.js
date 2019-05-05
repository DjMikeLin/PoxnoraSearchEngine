//faction1, faction2 both strings. Returns an object with 1 key of factions and value of an Array
function findFactions(faction1, faction2){
    let factions = [faction1];
    if(faction2.length !== 0){//If faction2 exists
        factions.push(faction2);
    }
    return { factions: factions };
}

function sort(option, runes){
    switch(option){
        case "descend":
            sortByNoraDescending(runes);
            break;
        case "ascend":
            sortByNoraAscending(runes);
            break;
        case "name":
            sortByName(runes);
            break;
        default:
            return null;
    }
    return runes;
}

function sortByNameAndLevel(abilities){
    abilities.sort((a, b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase())
            return -1;
        else if(a.name.toLowerCase() > b.name.toLowerCase())
            return 1;
        
        return parseInt(a.level) < parseInt(b.level) ? -1 : 1;
    });
    return abilities;
}

function sortByNoraAscending(runes){
    runes.sort((a, b) => {
        return b.noraCost - a.noraCost;
    });
    return runes; 
}

function sortByNoraDescending(runes){
    runes.sort((a, b) => {
        return a.noraCost - b.noraCost;
    });
    return runes; 
}

function sortByName(runes){
    runes.sort((a, b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase())
            return -1;
        else if(a.name.toLowerCase() > b.name.toLowerCase())
            return 1;
        
        return 0;
    });
    return runes;
}

module.exports = {
    findFactions,
    sort,
    sortByName,
    sortByNameAndLevel,
    sortByNoraAscending,
    sortByNoraDescending
};