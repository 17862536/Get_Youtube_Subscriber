const mongoose = require('mongoose')
const subscriberModel = require('./models/subscriberModel')
const data = require('./data')

// Connect to DATABASE
mongoose.connect("mongodb://127.0.0.1:27017/subscribers",{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({});
    await subscriberModel.insertMany(data);
    await mongoose.disconnect();
}
refreshAll();