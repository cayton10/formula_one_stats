import { connect, ConnectOptions } from 'mongoose';

class MongoConnection implements connect {
    const mongoose
}

mongoose
    .connect('mongodb://mongo:27017/cinema')
    .catch(e => {
        console.error('Connection error', e.message);
    })

const db = mongoose.connection;
module.exports = db;