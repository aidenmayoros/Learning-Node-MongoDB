const { MongoClient } = require('mongodb');

// Replace the following with your Atlas connection string
const url =
	'mongodb+srv://aidenmayoros:bZt46GTO8Gu14eho@cluster0.cztbbwm.mongodb.net/Cluster0';
const client = new MongoClient(url);

async function run() {
	try {
		await client.connect();
		console.log('Connected correctly to server');
	} catch (err) {
		console.log(err.stack);
	} finally {
		await client.close();
	}
}

run().catch(console.dir);
