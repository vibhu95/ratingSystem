class Ride{
    constructor(){
        this._RideId = null;
        this._RiderId = null;
        this._PassengerId = null;
        this._Date = null;
        this._Amount = null;
        this._From = null;
        this._To = null;
        this._PassengerRating = null;
        this._RiderRating = null;
    }

    get RideId() {
        return this._RideId;
    }

    set RideId(value) {
        this._RideId = value;
    }

    get RiderId() {
        return this._RiderId;
    }

    set RiderId(value) {
        this._RiderId = value;
    }

    get PassengerId() {
        return this._PassengerId;
    }

    set PassengerId(value) {
        this._PassengerId = value;
    }

    get Date() {
        return this._Date;
    }

    set Date(value) {
        this._Date = value;
    }

    get Amount() {
        return this._Amount;
    }

    set Amount(value) {
        this._Amount = value;
    }

    get From() {
        return this._From;
    }

    set From(value) {
        this._From = value;
    }

    get To() {
        return this._To;
    }

    set To(value) {
        this._To = value;
    }

    get PassengerRating() {
        return this._PassengerRating;
    }

    set PassengerRating(value) {
        this._PassengerRating = value;
    }

    get RiderRating() {
        return this._RiderRating;
    }

    set RiderRating(value) {
        this._RiderRating = value;
    }
}

module.exports = Ride;