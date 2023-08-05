const { Person } = require('./person.js');
const dotenv = require('dotenv');
const connectToDataBase = require('./src/database/connect.js');

dotenv.config();

connectToDataBase();

// require('./modules/path.js');
// require('./modules/fs.js');
// require('./modules/http.js');

require('./modules/express.js');

// const person = new Person('João Paulo');
