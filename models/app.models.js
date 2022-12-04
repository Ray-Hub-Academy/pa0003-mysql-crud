var mysql = require('../helpers/database');

exports.getCustomers = (cb) => {
    //SQL QUERY
    var q = `SELECT customerName FROM customers`;

    //Execute QUERY and GET RESULTS
    mysql.query(q, (err, results) => {
        if(err){
            console.log(err);
            cb(err, null);
        }else{
            cb(null, results);
        }
    });
}