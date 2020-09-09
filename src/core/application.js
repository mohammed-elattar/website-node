import express from 'express';
import bodyParser from 'body-parser';
import env from './env';
import ServiceProvidersContainer from 'core/service-prroviders-container';
import router from "./Router";

export default class Application {
    constructor() {
        this.prepareServer();
        this.initialzeProviders()
        router.setExpressApp(this.express);
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
        this.serviceProvidersContainer.registerRoutes();
        this.express.listen(process.env.PORT, function () {
            console.log(`serving from port ${env('PORT')}`);
        })
    }
}
