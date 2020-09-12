import {response} from "./application";

class Router {

    setExpressApp(expressApp) {
        this.expressApp = expressApp;
    }

    _handleRequest(requestMethod, route, [controller, controllerAction]) {
        this.expressApp[requestMethod](route, function () {
            let controllerObject = new controller,
                controllerMethod = controllerObject[controllerAction].bind(controllerObject);

            let output = controllerMethod();
            if (output) {
                response.send(output);
            }
        });

        return this;
    }

    get(route, action) {
        return this._handleRequest('get', route, action);
    }

    post(route, action) {
        return this._handleRequest('post', route, action);
    }

    put(route, action) {
        return this._handleRequest('put', route, action);
    }

    delete(route, action) {
        return this._handleRequest('delete', route, action);
    }

    options(route, action) {
        return this._handleRequest('options', route, action);
    }
}

export default new Router;
