import env from "./env";

const MongoClient = require('mongodb').MongoClient;

const port = env('DATABASE_PORT', 27017);
const user = env('DATABASE_USERNAME');
const password = env('DATABASE_PASSWORD');

// Connection URL
const url = `mongodb://db:${port}`;

const client = new MongoClient(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    auth: {
        user,
        password
    }
});

function connect() {
    new Promise((resolve, reject) => {
        client.connect((error) => {
            if (error) {
                reject(error);
            } else {
                resolve(client);
            }
        })
    })
}

(async function () {
    await connect();
})()

export default client;
