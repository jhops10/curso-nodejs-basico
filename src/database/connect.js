const mongoose = require('mongoose');

const connectToDataBase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.vr1mwdi.mongodb.net/?retryWrites=true&w=majority`
  );
};

module.exports = connectToDataBase;
