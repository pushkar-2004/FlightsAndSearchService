const express = require('express');

const setupAndStartServer = async () => {
    const app = express();
    const PORT = 3000;
    app.listen(PORT , ()=>{
        console.log(`Server started on PORT ${PORT}`);
    });
}

setupAndStartServer();