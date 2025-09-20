const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');
const cors = require('cors');

const app=express();
// allow cross origin requests
app.use(cors());
//mongoose.connect('mongodb+srv://dhanapalang_db_user:test123@cluster0.ntdwtd5.mongodb.net/');
//mongoose.connect('mongodb://localhost:27017/admin');
mongoose.connect('mongodb://dhana:test123@localhost:27017/graphql');
mongoose.connection.once('open', () => {    
    console.log("connected to database");
});


app.use('/graphql', graphqlHTTP({
    schema, //: require('./schema/schema.js'),
    graphiql: true
}));
app.listen(4000, () => {
    console.log('Server running on port 4000')
});
