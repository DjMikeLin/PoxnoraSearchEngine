require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const exec = require('child_process').exec;
const yesterday = new Date();
const userName = process.env.REMOTE_USERNAME;
const password = process.env.REMOTE_PASSWORD;
const URI = process.env.REMOTE_URI;

module.exports = {
    getJSON: async() => {
        let json = await axios.get('https://www.poxnora.com/api/feed.do?t=json')
        let feed = await JSON.stringify(json.data)
        
        //if old feed.json is different then new one
        if(JSON.stringify(feed) != JSON.parse(fs.readFileSync('JSON/feed.json'))){ 
            yesterday.setDate(yesterday.getDate() - 1)

            await exec('mv JSON/feed.json JSON/feed' + 
                (yesterday.getMonth() + 1 < 10 ? "0" + yesterday.getMonth() + 1 : yesterday.getMonth() + 1) + 
                (yesterday.getDate() < 10 ? "0" + yesterday.getDate() : yesterday.getDate()) +
                yesterday.getFullYear() +
                '.json' 
            ),
            (error, stdout, stderr) => {
                console.log('stdout: ' + stdout)
                console.log('stderr: ' + stderr)
                if(error !== null){
                     console.log('exec error: ' + error)
                }
            }
                
            await exec('mv JSON/champs.json JSON/champs' + 
                (yesterday.getMonth() + 1 < 10 ? "0" + yesterday.getMonth() + 1 : yesterday.getMonth() + 1) + 
                (yesterday.getDate() < 10 ? "0" + yesterday.getDate() : yesterday.getDate()) +
                yesterday.getFullYear() +
                '.json' 
            ),
            (error, stdout, stderr) => {
                console.log('stdout: ' + stdout)
                console.log('stderr: ' + stderr)
                if(error !== null){
                     console.log('exec error: ' + error)
                }
            }

            await exec('mv JSON/equips.json JSON/equips' + 
                (yesterday.getMonth() + 1 < 10 ? "0" + yesterday.getMonth() + 1 : yesterday.getMonth() + 1) + 
                (yesterday.getDate() < 10 ? "0" + yesterday.getDate() : yesterday.getDate()) +
                yesterday.getFullYear() +
                '.json' 
            ),
            (error, stdout, stderr) => {
                console.log('stdout: ' + stdout)
                console.log('stderr: ' + stderr)
                if(error !== null){
                     console.log('exec error: ' + error)
                }
            }

            await exec('mv JSON/relics.json JSON/relics' + 
                (yesterday.getMonth() + 1 < 10 ? "0" + yesterday.getMonth() + 1 : yesterday.getMonth() + 1) + 
                (yesterday.getDate() < 10 ? "0" + yesterday.getDate() : yesterday.getDate()) +
                yesterday.getFullYear() +
                '.json' 
            ),
            (error, stdout, stderr) => {
                console.log('stdout: ' + stdout)
                console.log('stderr: ' + stderr)
                if(error !== null){
                     console.log('exec error: ' + error)
                }
            }

            await exec('mv JSON/spells.json JSON/spells' + 
                (yesterday.getMonth() + 1 < 10 ? "0" + yesterday.getMonth() + 1 : yesterday.getMonth() + 1) + 
                (yesterday.getDate() < 10 ? "0" + yesterday.getDate() : yesterday.getDate()) +
                yesterday.getFullYear() +
                '.json' 
            ),
            (error, stdout, stderr) => {
                console.log('stdout: ' + stdout)
                console.log('stderr: ' + stderr)
                if(error !== null){
                     console.log('exec error: ' + error)
                }
            }

            await fs.writeFile("JSON/feed.json", feed, (err, result) => {
                if(err) 
                    console.log('error creating feed', err)
            })

            let champs = await JSON.stringify(json.data.champs)
            await fs.writeFile("JSON/champs.json", champs, (err, result) => {
                if(err) 
                    console.log('error creating champs', err)
            })


            let spells = await JSON.stringify(json.data.spells)
            await fs.writeFile("JSON/spells.json", spells, (err, result) => {
                if(err) 
                    console.log('error creating spells', err)
            })

            let equips = await JSON.stringify(json.data.equips)
            await fs.writeFile("JSON/equips.json", equips, (err, result) => {
                if(err) 
                    console.log('error creating equips', err)
            })

            let relics = await JSON.stringify(json.data.relics)
            await fs.writeFile("JSON/relics.json", relics, (err, result) => {
                if(err) 
                    console.log('error creating relics', err)
            })

            await exec('mongoimport --uri mongodb+srv://' + userName + ':' + password + URI + ' --drop --collection champions1 --file JSON/champs.json --jsonArray',
            (error, stdout, stderr) => {
                console.log('stdout: ' + stdout)
                console.log('stderr: ' + stderr)
                if(error !== null){
                     console.log('exec error: ' + error)
                }
            })
            
            await exec('mongoimport --uri mongodb+srv://' + userName + ':' + password + URI + ' --drop --collection spells1 --file JSON/spells.json --jsonArray',
            (error, stdout, stderr) => {
                console.log('stdout: ' + stdout)
                console.log('stderr: ' + stderr)
                if(error !== null){
                     console.log('exec error: ' + error)
                }
            })
            
            await exec('mongoimport --uri mongodb+srv://' + userName + ':' + password + URI + ' --drop --collection relics1 --file JSON/relics.json --jsonArray',
            (error, stdout, stderr) => {
                console.log('stdout: ' + stdout)
                console.log('stderr: ' + stderr)
                if(error !== null){
                     console.log('exec error: ' + error)
                }
            })
            
            await exec('mongoimport --uri mongodb+srv://' + userName + ':' + password + URI + ' --drop --collection equips1 --file JSON/equips.json --jsonArray',
            (error, stdout, stderr) => {
                console.log('stdout: ' + stdout)
                console.log('stderr: ' + stderr)
                if(error !== null){
                     console.log('exec error: ' + error)
                }
            })
        }
    }
};
