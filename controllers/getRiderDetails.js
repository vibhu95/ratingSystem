const Dao = require('../data/dao/common');

const getRiderDetails = (data,res)=>{

    const commonDao = new Dao();
    commonDao.getRiderDetails(data.riderId, result=>{
        res.json(result);
    });
}

module.exports = getRiderDetails;