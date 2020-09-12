class Router {

    setExpressApp(expressApp) {
        this.expressApp = expressApp;
    }

    _handleRequest(requestMthod, route, [controller, controllerAction]) {
        this.expressApp[requestMthod](route, function (request, response) {
            let controllerObject = new controller,
                controllerMethod = controllerObject[controllerAction];

            let output = controllerMethod(request, response);
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
