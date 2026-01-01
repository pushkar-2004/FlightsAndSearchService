const {CityRepository} = require('../repository/index'); 

class CityRepository{
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){

        try{
            const city = new this.cityRepository.createCity(data);
            return city;
        }catch(err){
            console.log("Something went wrong inside the city serivce create city");
            throw {err};
        }

    };

    async deleteCity(cityId) {

        try{
            const city = new this.cityRepository.deleteCity(cityId);
            return city;
        }catch(err){
            console.log("Something went wrong inside the city serivce create city");
            throw {err};
        }

    };

    async updateCity(cityId,data) {

        try{
            const city = new this.cityRepository.updateCity(cityId,data);
            return city;
        }catch(err){
            console.log("Something went wrong inside the city serivce create city");
            throw {err};
        }

    };

    async getCity(cityId) {

        try{
            const city = new this.cityRepository.getCity(cityId);
            return city;
        }catch(err){
            console.log("Something went wrong inside the city serivce create city");
            throw {err};
        }

    };

}