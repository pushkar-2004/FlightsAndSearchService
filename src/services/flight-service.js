const {FlightRepository,AirplaneRepository} = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService{

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw {error: "Arival time cannot be less then departure time"}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data,capacity:airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Something went wrong inside the flight serivce create flight");
            throw {error};
        }
    }

    async getFlightData(){

    }

}

module.exports = FlightService;