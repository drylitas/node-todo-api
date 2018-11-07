//MongoDB module v3
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err){
		return console.log('Unable to connect MongoDB server');
	}
		console.log('Connected to MongoDB server');
		const db = client.db('TodoApp')

		db.collection('Todos').find().toArray().then((docs) =>{
			console.log('Todos');
			console.log(JSON.stringify(docs, undefined, 2));
		},(err) => {
			console.log('Unable to fech todos', err);

	});

	client.close();
});
