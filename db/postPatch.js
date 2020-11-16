const axios = require('axios');
const fs = require('fs');

const getJSON = async () => {
    let json = await axios.get('https://www.poxnora.com/api/feed.do?t=json');
    
    let feed = JSON.stringify(json.data);
    fs.writeFile("JSON/feed.json", feed, (err, result) => {
        if(err) 
            console.log('error creating feed', err);
    });

    //if old feed.json is different then new one
    if(JSON.stringify(feed) == JSON.parse(fs.readFileSync('JSON/feed_old.json')))
        console.log("test");

    let champs = JSON.stringify(json.data.champs);
    fs.writeFile("JSON/champs.json", champs, (err, result) => {
        if(err) 
            console.log('error creating champs', err);
    });


    let spells = JSON.stringify(json.data.spells);
    fs.writeFile("JSON/spells.json", spells, (err, result) => {
        if(err) 
            console.log('error creating spells', err);
    });

    let equips = JSON.stringify(json.data.equips);
    fs.writeFile("JSON/equips.json", equips, (err, result) => {
        if(err) 
            console.log('error creating equips', err);
    });

    let relics = JSON.stringify(json.data.relics);
    fs.writeFile("JSON/relics.json", relics, (err, result) => {
        if(err) 
            console.log('error creating relics', err);
    });
}
getJSON();
