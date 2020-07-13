const express = require('express');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const morgan = require('morgan');
const G = require('./globals');
const _init = require('./controllers/init');
const fs = require('fs');
const path = require('path');

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {

    const app = express();

    app.use(morgan('dev', { skip : (req, res) => res.statusCode < 400 }));
    app.use(morgan('common', { stream: fs.createWriteStream(path.join(__dirname, 'error.log'), { flags: 'a' }) }))

    app.use(_setCors);

    G.rootPath = __dirname;

    _init(app);

    app.listen(process.env.PORT || 7800, function() {
        console.log("Server up and listening");
    });

    function _setCors(req, res, next) {
        res.header("Access-Control-Allow-Origin", ['*'].join());
        res.header("Access-Control-Allow-Methods", ['GET','PUT','POST','OPTIONS'].join());
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    }
    if (!process.env.NODE_ENV){
        process.env.NODE_ENV = "Production";
    }
    console.log(`Worker ${process.pid} started`);
}