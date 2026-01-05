const {FlightService} = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a flight",
            err:error,
        });
    }
}

const getAll = async (req,res) => {
    try {
        const response = await flightService.getFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            message:'fetched all the flights',
            err:{},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch flights",
            err:error
        });
    }
}

module.exports = {
    create,
    getAll
}