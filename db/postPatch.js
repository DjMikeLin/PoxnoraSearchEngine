const axios = require('axios');
const fs = require('fs');

const getJSON = async () => {
    let json = await axios.get('https://www.poxnora.com/api/feed.do?t=json');
   
    let champs = JSON.stringify(json.data.champs);
    fs.writeFile("champs.json", champs, (err, result) => {
        if(err) 
            console.log('error creating champs', err);
    });
}
getJSON();
