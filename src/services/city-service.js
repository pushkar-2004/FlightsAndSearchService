const {CityRepository} = require('../repository/index'); 

class CityService{
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

    async getAllCities(filter){
        try{
            const city = this.cityRepository.getAllCity({name:filter.name});
            console.log(city);
            return city;
        }catch(err){
            console.log("Something went wrong inside the city serivce getAll city");
            throw {err};
        }
    }

}

module.exports = CityService;