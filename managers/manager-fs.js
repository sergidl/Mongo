import dotenv from "dotenv";
import { MongoClient } from 'mongodb';


dotenv.config();
const pass = process.env.PASS;
const url = `mongodb+srv://sdiaz2:${pass}@cluster0.9gldt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(url);
const dbName = 'sdiaz2_movies';
// afegiu codi ... (2pto)
export class ManagerFs {
    constructor() {
        this.movies = this.main();
        client.close();
    }
    async main() {
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('movies');
        const findResult = await collection.find({}).toArray();

        // the following code examples can be pasted here...
        // client.close();
        return findResult;
    }
    async insert(data) {
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('movies');
        const insertResult = await collection.insertOne(data);
        // client.close();
        return insertResult;
    }
    async delete(data) {
        // Use connect method to connect to the server

        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('movies');
        // convert data to int
        data=parseInt(data)
        const deleteResult = await collection.deleteOne({ id: data });
        // const deleteResult = await collection.deleteOne({id:data});
        // client.close();
        return deleteResult;
    }
}



