var appModel = require('../models/app.models');

exports.getCustomers = (req, res) => {
    appModel.getCustomers((err, results) => {
        if(err){
            res.status(404).json({
                "code" : 404,
                "message" : err
            });
        }else{
            res.status(200).json({
                "code" : 200,
                "message" : "Customer Lists",
                "data" : results
            });
        }
    });
}