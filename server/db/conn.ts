import * as mongoose from 'mongoose';

mongoose
    .connect('mongodb://mongo:27017/cinema')
    .catch(e => {
        console.error('Connection error', e.message);
    })

const db = mongoose.connection;
module.exports = db;