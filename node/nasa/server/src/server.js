const http = require('http');
const {mongoConnect} = require('./services/mongo');
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunches } = require('./models/launches.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);


const start = async function() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunches();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}
  
start();


