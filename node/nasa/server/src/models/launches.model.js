const launchesDatabase = require('./launches.mongo');
const planetsDatabase = require('./planets.mongo');
const axios = require('axios');

//const launches = new Map();

//let latestFlightNumber = 100;

const DEFALT_FLIGHT_NUMBER = 100;

const launch = {
    flightNumber: 100, 
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customers: ['ZTM', 'Nasa'],
    upcoming: true,
    success: true
}

//launches.set(launch.flightNumber, launch);
saveLaunch(launch);

async function existsLaunchWithId(launchId) {
    //return launchesDatabase.has(launchId);
    return await findLaunch({
        flightNumber: launchId
    });
}

async function getLatestFlightNumber() {
  const latestLaunch = await launchesDatabase
  .findOne()
  .sort('-flightNumber');

  if (!latestLaunch) {
    return DEFALT_FLIGHT_NUMBER;
  }

  return latestLaunch.flightNumber;
}

async function getAllLaunches(skip, limit) {
    //return Array.from(launches.values());
    return await launchesDatabase
    .find({}, {'_id' : 0, '__v' : 0})
    .sort({flightNumber: 1})
    .skip(skip)
    .limit(limit);
}

async function saveLaunch(launch) {
    await launchesDatabase.findOneAndUpdate({
        flightNumber: launch.flightNumber, 
    }, launch, {
        upsert: true
    });
}


async function scheduleNewLaunch(launch) {
    const planet = planetsDatabase.findOne({
        keplerName: launch.target,
    });

    if (!planet) {
       throw new Error('No matching planet was found!'); 
    }

    const newFlightNumber = await getLatestFlightNumber() + 1;
    const newLaunch = Object.assign(launch, 
        {
            success: true, 
            upcoming: true, 
            customers: ['Demo', 'NASA'],
            flightNumber: newFlightNumber,
        });

    saveLaunch(launch);
    
}


// function addNewLaunch(aNewLaunch) {
//     latestFlightNumber++;
//     launchesDatabase.set(latestFlightNumber, Object.assign(aNewLaunch, {
//         success: true,
//         upcoming: true, 
//         customers: ['Demo', 'NASA'],
//         flightNumber:  latestFlightNumber,
//     }));
// }

async function abortLaunchById(launchId) {
    // const aborted = launchesDatabase.get(launchId)
    // aborted.upcoming = false;
    // aborted.success = false;

    // return aborted;
    const aborted = await launchesDatabase.updateOne({
            flightNumber: launchId,
        },
        {
            upcoming: false,
            success: false
        }
    );
    return aborted.ok === 1 && aborted.nModified === 1;
}


async function findLaunch(filter) {
  return await launchesDatabase.findOne(filter);
}

const SPAXEX_API_URL = 'https://api.spacexdata.com/v4/launches/query';

async function populateLaunches() {
    console.log("Downloading data ... ");
    const response = await axios.post(SPAXEX_API_URL, {
        query: {},
        options : {
            pagination: false,
            populate: [
                {
                    path: 'rocket',
                    select: {
                        name : 1
                    }
                },
                {
                    path: 'payloads',
                    select: {
                        customers : 1
                    }
                }
            ]
        }
    
    });

    if (response.status != 200) {
        console.log('Problem downloading launch data');
        throw new Error('Launch data download failed');
    }
    
    const launchDocs = response.data.docs;
    for (const launchDoc of launchDocs) {

        const payloads = launchDoc['payloads'];
        const customers = payloads.flatMap((payload) => {
            return payload['customers'];
        });

        const launch = {
            flightNumber: launchDoc['flight_number'],
            mission: launchDoc['name'],
            rocket: launchDoc['rocket']['name'],
            launchDate: launchDoc['date_local'],
            upcoming: launchDoc['upcoming'],
            success: launchDoc['success'],
            customers: customers,
        }

        //console.log('launch ', launch);

        await saveLaunch(launch);

    }


}

async function loadLaunches() {
    const firstLaunch = await findLaunch({
        flightNumber: 1,
        rocket: 'Falcon 1',
        mission: 'FalconSat',
    });

    if (firstLaunch) {
        console.log('Launch data was already loaded');
    } else {
        await populateLaunches();
    }
}

module.exports = {
    getAllLaunches,
    scheduleNewLaunch,
    existsLaunchWithId,
    abortLaunchById,
    loadLaunches
}