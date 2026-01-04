const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const {Airport,City} = require('./models/index');

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);


    app.listen(PORT , async ()=>{
        console.log(`Server started on PORT ${PORT}`);
        // const airports = await Airport.findAll({
        //     include:[
        //         {
        //             model:City
        //         }
        //     ]
        // });
        // const result = airports.map(a => a.toJSON());
        // console.log(result);
        // console.log(airports)
        // const city = await City.findOne({
        //     where: { id: 5 }
        // });

        // const airports = await city.getAirports();

        // console.log(city, airports);
    });
}

setupAndStartServer();