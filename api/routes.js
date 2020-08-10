'use strict';

// Connect the routes file to the controller file
const controller = require('./controller');

module.exports = (app) => {
    app.route('/about')
        .get(controller.about);
    app.route('/distance/:zipcode1/:zipcode2')
        .get(controller.getDistance);
};