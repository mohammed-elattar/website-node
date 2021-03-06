import express from 'express';
import bodyParser from 'body-parser';
import env from './env';
import ServiceProvidersContainer from './service-prroviders-container';
import router from './Router';
import fileUpload from 'express-fileupload';

class Application {
     request = null;
     response = null;

    constructor() {
        this.prepareServer();
        this.initialzeProviders()
        router.setExpressApp(this.express);
    }


    initialzeProviders() {
        this.serviceProvidersContainer = new ServiceProvidersContainer;
        this.serviceProvidersContainer.boot();
    }

    prepareServer() {
        this.express = new express();
        this.express.use((request, response, next) => {
            this.request = request;
            this.response = response;

            next();
        });
        this.express.use(bodyParser.urlencoded({
            extended: true,
        }))
        this.express.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/'
        }));
    }

    run() {
        this.serviceProvidersContainer.registerRoutes();
        this.express.listen(process.env.PORT, function () {
            console.log(`serving from port ${env('PORT')}`);
        })
    }
}


let app = new Application();
export default app;

export function response() {
    return app.response;
}

export function request() {
    return app.request;
}
