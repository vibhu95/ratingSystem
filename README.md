# Rating System

This ride rating system developed using following stack.

  - NodeJS
  - ExpressJS
  - MongoDB
  - node cluster

# Features!

  - Passenger can Rate the Rider after completion of Ride
  - Rider can Rate the Passenger after completion of Ride
  - Rider can check his aggregated rating along with complete profile
  - Passenger can check his aggregated rating along with complete profile
  
### Installation

Rating System requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and start the server.

```sh
$ cd ratingSystem
$ npm install
$ NODE_ENV=production node index.js
```

Default port is.

```sh
PORT 7800
```
## API's

### Rate Rider
  Rate rider after completion of ride.

* **URL**
  /rider.rate

* **Method:**
  `POST`

* **Body**
  `{
        "rideId":"laushilg324",
        "rating": 4
    }`

### Rate Passenger
  Rate passenger after completion of ride.

* **URL**
  /passenger.rate

* **Method:**
  `POST`

* **Body**
  `{
        "rideId":"laushilg324",
        "rating": 4
    }`

### Get Passenger Details
  Get passenger details along with rating.

* **URL**
  /passenger.details

* **Method:**
  `GET`

* **Query Param**
  `passengerId`

### Get Rider Details
  Get rider details along with rating.

* **URL**
  /rider.details

* **Method:**
  `GET`

* **Query Param**
  `riderId`

### Models
```sh
Ride
{
    _RideId,
    _RiderId,
    _PassengerId,
    _Date,
    _Amount,
    _From,
    _To,
    _PassengerRating,
    _RiderRating
}
```
```sh
Passenger
{
    _PassengerId,
    _Name,
    _Mobile,
    _Email,
    _Rating,
    _Image
}
```
```sh
Rider
{
    _RiderId,
    _Name,
    _Rating,
    _Image,
    _Mobile,
    _Email
}
```


### License
----

MIT

