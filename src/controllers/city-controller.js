const {CityService} = require('../services/index');

const cityService = new CityService();

const create = async (req , res) => {
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully created city",
        });
    }catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a city",
            err:err,
        });
    }
}

const destroy = async (req,res) => {
    try {
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:"successfully deleted city",
            err:{}
        });
    } catch (err) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to delete a city",
            err:err,
        });
    }
}


// GET -> /city/:id
const get = async (req,res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully get city",
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to get a city",
            err:err,
        });
    }
}


// PATCH  -> /city/:id , req.body
const update = async (req,res) => {
    try {
        const city = await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully updated city",
            err:{}
        });
    } catch (err) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to update a city",
            err:err,
        });
    }
}

const getAllCities = async (req,res) => {
    try{
        const city = await cityService.getAllCities(req.query);
        console.log(city);
        return res.status(200).json({
            city:city,
            success:true,
            message: "Successfull fetched all cities",
            err:{}
        });
    }
    catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to fetch cities",
            err:err,
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAllCities,
};