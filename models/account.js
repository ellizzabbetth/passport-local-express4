const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// the passport-local-mongoose package automatically takes care of salting and
// hashing the password for us.
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    password: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);
