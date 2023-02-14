const mongoose = require('mongoose');
const {db_url} = require('../keys');
async function getConnection(){
    await mongoose.connect(db_url)
    .then(()=>console.log("database connected successfully"))
    .catch(err=>console.log(err));
}

module.exports = getConnection;