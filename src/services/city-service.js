const {CityRepository} = require('../repository/index'); 

class CityRepositori{
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){

        try{
            const city = this.cityRepository.createCity(data);
            return city;
        }catch(err){
            console.log("Something went wrong inside the city serivce create city");
            console.log(data);
            throw {err};
        }

    };

    async deleteCity(cityId) {

        try{
            const city = this.cityRepository.deleteCity(cityId);
            return city;
        }catch(err){
            console.log("Something went wrong inside the city serivce create city");
            throw {err};
        }

    };

    async updateCity(cityId,data) {

        try{
            const city = this.cityRepository.updateCity(cityId,data);
            return city;
        }catch(err){
            console.log("Something went wrong inside the city serivce create city");
            throw {err};
        }

    };

    async getCity(cityId) {

        try{
            const city = this.cityRepository.getCity(cityId);
            return city;
        }catch(err){
            console.log("Something went wrong inside the city serivce create city");
            throw {err};
        }

    };

}

module.exports = CityRepositori;