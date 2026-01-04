const {Airplane} = require('../models/index');

class AirplaneRepository{
    async getAirplane(id){
        console.log(id)
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Someting went wrong inside the getAirplane function inside airplane-repository");
            throw {error};
        }
    }
}

module.exports = AirplaneRepository;