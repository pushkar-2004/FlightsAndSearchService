const {ClientErrors} = require('../utils/error-codes');

const validateCreateFlight = (req,res,next) => {
    if( 
        !req.body.flightNumber || 
        !req.body.airplaneId ||
        !req.body.arrivalAirportId ||
        !req.body.departureAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        return res.status(ClientErrors.BAD_REQUEST).json({
            data:{},
            success:false,
            message:"Invalid req body for create flight",
            err:"missign properties to create a valid flight"
        });
    }
    next()
}

module.exports = {
    validateCreateFlight
}