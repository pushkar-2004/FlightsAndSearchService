const {Flights} = require('../models/index');

class FlightRepository {
    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight repository create flight");
            throw {error};
        }
    }
    
    async getFlight(flightId){
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight repository create flight");
            throw {error};
        }
    }

}

module.exports = FlightRepository;