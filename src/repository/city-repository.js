const { Op } = require('sequelize');
const { City } = require('../models/index'); 

class CityRepository {
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.log("Someting went wrong inside the createCity function inside city-repository");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id:cityId 
                }
            });
        }catch(err){
            console.log("Something went wrong inside the deleteCity in city-repository")
            throw(err);
        }
    }

    async updateCity(cityId,data){
        try{
            const city = await City.update(data,{
                where:{
                    id:cityId
                }
            });
            return city;
        }
        catch(err){
            console.log("Something went wrong inside the update City funcion inside city repo");

            throw(err);
        }
    };

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        }
        catch(err){
            console.log("Something went wrong inside the getCity fun in city-repo")
            throw(err);
        }
    }

    async getAllCity(filter){
        try{
            console.log(filter)
            if(filter.name){
                const cities = await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith] : filter.name
                        }
                    }
                });
                return cities;
            }
            const city = await City.findAll();
            return city;
        }
        catch(err){
            console.log("Something went wrong inside the getAllCity fun in city-repo")
            throw(err);
        }
    }

}

module.exports = CityRepository;