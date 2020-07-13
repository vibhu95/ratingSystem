const Dao = require('../data/dao/common');

const getPassengerDetails = (data,res)=>{

    const commonDao = new Dao();
    commonDao.getPassengerDetails(data.passengerId, result=>{
        res.json(result);
    });
}

module.exports = getPassengerDetails;