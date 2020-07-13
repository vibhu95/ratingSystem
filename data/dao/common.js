const G = require('../../globals');
const Q = require('q');

class Dao{
    constructor(){
        this.db = G.DB;
    }

    rateRider(rideId, rating, cb){
        const rides = this.db.collection('rides');
        const riders = this.db.collection('riders');
        rides.find({_RideId: rideId}).toArray((err, result)=>{
            if (result){
                rides.updateOne({_RideId: rideId}
                    , { $set: { _RiderRating : rating } }, {upsert : true}, function(errUp, updatedResult) {
                        console.log("Updated the rider rating");
                    });
                if (result[0])
                    rides.find({_RiderId: result[0]._RiderId}).toArray((errFind, riderResult)=>{
                        if (riderResult) {
                            let calculatedRating = (riderResult.map(i=>i._RiderRating).reduce((a, b) => a+b) + rating) / (riderResult.length + 1);
                            riders.updateOne({_RiderId: result[0]._RiderId}
                                , { $set: { _Rating : calculatedRating } }, {upsert : true}, function(errUpRider, updatedRiderResult) {
                                    console.log("Updated the rider rating");
                                });
                        }
                    });
            }
            cb();
        });
    }

    ratePassenger(rideId, rating, cb){
        const rides = this.db.collection('rides');
        const passengers = this.db.collection('passengers');
        rides.find({_RideId: rideId}).toArray((err, result)=>{
            if (result){
                rides.updateOne({_RideId: rideId}
                    , { $set: { _PassengerRating : rating } }, {upsert : true}, function(errUp, updatedResult) {
                        console.log("Updated the passenger rating");
                    });
                if (result[0])
                    rides.find({_PassengerId: result[0]._PassengerId}).toArray((errFind, passengerResult)=>{
                        if (passengerResult) {
                            let calculatedRating = (passengerResult.map(i=>i._PassengerRating).reduce((a, b) => a+b) + rating) / (passengerResult.length + 1);
                            passengers.updateOne({_PassengerId: result[0]._PassengerId}
                                , { $set: { _Rating : calculatedRating } }, {upsert : true}, function(errUpRider, updatedRiderResult) {
                                    console.log("Updated the rider rating");
                                });
                        }
                    });
            }
            cb();
        });
    }

    getRiderDetails(riderId, cb){
        const rides = this.db.collection('riders');
        rides.find({_RiderId: riderId}).toArray((err, result)=>{
            console.log("Rider Details returned");
            if (result && result[0])
                cb(result[0]);
            cb({});
        });
    }

    getPassengerDetails(passengerId, cb){
        const passengers = this.db.collection('passengers');
        passengers.find({_PassengerId: passengerId}).toArray((err, result)=>{
            console.log("Passenger Details returned");
            if (result && result[0])
                cb(result[0]);
            cb({});
        });
    }
}

module.exports = Dao;