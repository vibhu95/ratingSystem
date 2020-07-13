const Q = require('q');
const G = require('../globals');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const Routes = require('../routers/routes');

const _init = (app)=>{
    Q(undefined)
    .then(()=>{
        return _initConfig()
    })
    .then(()=>{
        return _initMongoConnection()
    })
    .fail((err)=>{
        console.error(err);
    })
    .finally(()=>{
        const routers = new Routes(app);
        routers.init_Routes();
    })
    .done();
}

function _initConfig(){
    const config = require(`../data/config/${process.env.NODE_ENV.toLowerCase()}`);
    G.congif = config;
    return Q.resolve();
}

function _initMongoConnection(){
    const mongoConfig = G.congif.mongo;
    MongoClient.connect(mongoConfig.url, {useUnifiedTopology:true}, (err,client)=>{
        assert.equal(null, err);
        console.log('Successfully Connected');
        const db = client.db(mongoConfig.database);
        G.DB = db;
        G.mongoClient = client;
        return Q.resolve();
    });
}

module.exports = _init;