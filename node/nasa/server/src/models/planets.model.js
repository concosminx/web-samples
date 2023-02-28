const fs = require('fs');
const path = require('path')
const { parse } = require('csv-parse');

const planets = require('./planets.mongo');

//const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 
    && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6
    ;
}

function loadPlanetsData() {
  return new Promise((resolve, reject) => { 
    fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'cumulative_2023.02.09_07.55.05.csv'))
        .pipe(parse({
            comment: '#',
            columns: true
        }))
        .on('data', async (data) => {
            if (isHabitablePlanet(data)) {
                //habitablePlanets.push(data);
                //replace with insert + update (upsert)
                //await planets.create({
                //    keplerName: data.kepler_name,
                //});
                savePlanet(data);
            }
        })
        .on('error', (err) =>{
            console.log(err);
            reject(err); //reject with specific error
        })
        .on('end', async () => {
            //habitablePlanets.map((planet) => {
            //    console.log(planet['kepler_name']);
            //});
            //console.log(`${habitablePlanets.length} habitable planets found!`);
            
            const countPlanetsFound = (await getAllPlanets()).length;
            console.log(`${countPlanetsFound} habitable planets found!`);

            resolve(); //no need to pass data here ... we will use habitablePlanets
        })
    });
}

async function getAllPlanets() {
    //return habitablePlanets
    // return planets.find({
    //     keplerName: 'Kepler-62 f'
    // }, {'keplerName': 0}); // or -keplerName, anotherField
    return await planets.find({}, {'_id' : 0, '__v' : 0}) ;
}

async function savePlanet(planet) {
    try {
        await planets.updateOne({
            keplerName: planet.kepler_name,
        }, {
            keplerName: planet.kepler_name,
        }, {
            upsert: true,
        });
    } catch(err) {
        console.error(`Could not save a planet ${err}`);
    }
}

module.exports = {
    loadPlanetsData,
    getAllPlanets,
};