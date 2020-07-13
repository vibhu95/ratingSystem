const ratePassenger = require('../controllers/ratePassenger');
const getRiderDetails = require('../controllers/getRiderDetails');
const rateRider = require('../controllers/rateRider');
const getPassengerDetails = require('../controllers/getPassengerDetails');
const bodyParser = require('body-parser');

class Routes{
    constructor(webserver){
        this.webserver = webserver;
    }

    init_Routes(){
        let app = this.webserver;

        app.use(bodyParser.json({ type: 'application/json' }))
        app.use(bodyParser.urlencoded({ extended: false }))
        
        app.get('/test', (req,res,next)=>{
            console.log('Host ::: ', req.header('Host'));
            console.log('Referer ::: ', req.header('Referer'));
            res.end('loginvibhuti');
        });

        app.post('/passenger.rate',(req,res,next)=>{
            if(req.body){
                ratePassenger(req.body,res);
            }else{
                res.end('done');
            }
        });

        app.get('/rider.details',(req,res,next)=>{
            getRiderDetails(req.query,res);
        });

        app.post('/rider.rate',(req,res,next)=>{
            if(req.body){
                rateRider(req.body,res);
            }else{
                res.end('done');
            }
        });

        app.get('/passenger.details',(req,res,next)=>{
            getPassengerDetails(req.query,res);
        });
    }
}

module.exports = Routes;