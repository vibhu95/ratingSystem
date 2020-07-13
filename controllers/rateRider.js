const Dao = require('../data/dao/common');

const rateRider = (data,res)=>{

    const commonDao = new Dao();
    commonDao.rateRider(data.rideId, data.rating, result=>{
        console.log('Rider Successfully Rated ',result);
    });

    res.end('done');
}

module.exports = rateRider;