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
            console.log(airplane.dataValues.capacity);
            const flight = await this.flightRepository.createFlight({...data, totalSeats :airplane.dataValues.capacity});
            // console.log(flight);
            return flight;
        } catch (error) {
            console.log("Something went wrong inside the flight serivce create flight");
            throw {error};
        }
    }

    async getFlightData(data){
        try {
            const flight = await this.flightRepository.getAllFlights(data);
            return flight;
        } catch (error) {
            console.log("Something went wromg inside the flight-service layer");
            throw {error}
        }
    }

    async getFlight(flightId){
        try {
            const result = await this.flightRepository.getFlight(flightId);
            return result;
        } catch (error) {
            console.log("Something went wromg inside the flight-service layer");
            throw {error}
        }
    }

    async updateFlight(flightId,data){
        try {
            const result = await this.flightRepository.updateFlight(flightId,data);
            return result;
        } catch (error) {
            console.log("Something went wromg inside the flight-service layer");
            throw {error}
        }
    }

}

module.exports = FlightService;