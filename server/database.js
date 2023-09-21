const { connect } = require('mongoose');
require('dotenv').config()

const MONGODB_URI = process.env.MONGO_DB_URI || '';

if (MONGODB_URI === '') {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = connect(`${MONGODB_URI}/myluminary_db`, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  console.log('🚀 Next.js Connected to MongoDb Database');
  return cached.conn;
}

module.exports = connectToDatabase;