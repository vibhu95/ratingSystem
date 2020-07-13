const Dao = require('../data/dao/common');

const ratePassenger = (data,res)=>{

    const commonDao = new Dao();
    commonDao.ratePassenger(data.rideId, data.rating, result=>{
        console.log('Passenger Successfully Rated ',result);
    });

    res.end('done');
}

module.exports = ratePassenger;