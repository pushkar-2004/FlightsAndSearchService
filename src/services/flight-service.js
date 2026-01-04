const {FlightRepository,AirplaneRepository} = require('../repository/index');

class FlightService{

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            console.log(data)
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data,capacity:airplane.capacity});
            console.log(airplane)
            console.log(flight)
            return flight;
        } catch (error) {
            console.log("Something went wrong inside the flight serivce create flight");
            throw {err};
        }
    }

    async getFlightData(){

    }

}

module.exports = FlightService;