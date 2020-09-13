class Router {

    setExpressApp(expressApp) {
        this.expressApp = expressApp;
    }

    _handleRequest(requestMethod, route, callback) {
        this.expressApp[requestMethod](route, function (request, response) {
            let output = callback(request, response);
            if (output) {
                return output;
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
