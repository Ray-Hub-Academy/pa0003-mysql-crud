var appController = require('../controllers/app.controller');
var pagesController = require('../controllers/pages.controller');

module.exports = function(app){
    //#region pages
    app.get('/', pagesController.getHomePage);
    //#endregion pages
    
    //#region data
    app.get('/customer/list', appController.getCustomers);
    //#endregion data
}