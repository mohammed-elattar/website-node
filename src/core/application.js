import express from 'express';
import bodyParser from 'body-parser';
import env from './env';
import ServiceProvidersContainer from '../core/service-prroviders-container';

export default class Application {
    constructor() {
        this.prepareServer();
        this.initialzeProviders()
    }

    initialzeProviders()
    {
        this.serviceProvidersContainer = new ServiceProvidersContainer;
        this.serviceProvidersContainer.boot();
    }

    prepareServer()
    {
        this.express = new express();
        this.express.use(bodyParser.urlencoded({
            extended: true,
        }))
    }

    run()
    {
        this.express.get('/', function (request, response) {
            response.send('mohammed Elattar');
        })
        this.express.listen(process.env.PORT, function () {
            console.log(`serving from port ${env('PORT')}`);
        })
    }
}
