class Rider {

    constructor() {
        this._RiderId = null;
        this._Name = null;
        this._Rating = null;
        this._Image = null;
        this._Mobile = null;
        this._Email = null;
    }

    get RiderId() {
        return this._RiderId;
    }

    set RiderId(value) {
        this._RiderId = value;
    }

    get Name() {
        return this._Name;
    }

    set Name(value) {
        this._Name = value;
    }

    get Rating() {
        return this._Rating;
    }

    set Rating(value) {
        this._Rating = value;
    }

    get Image() {
        return this._Image;
    }

    set Image(value) {
        this._Image = value;
    }

    get Mobile() {
        return this._Mobile;
    }

    set Mobile(value) {
        this._Mobile = value;
    }

    get Email() {
        return this._Email;
    }

    set Email(value) {
        this._Email = value;
    }
}

module.exports = Rider;