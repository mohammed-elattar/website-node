class Router {

    setExpressApp(expressApp) {
        this.expressApp = expressApp;
    }

    _handleRequest(requestMethod, route, callback) {
        this.expressApp[requestMethod](route,async function (request, response) {
            let output = await callback(request, response);
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

    resource(resource, resourceHandler) {
        const {list, create, show, update, remove} = resourceHandler;
        return this._handleRequest('get', resource, list)
            ._handleRequest('get', resource + '/:id', show)
            ._handleRequest('put', resource + '/:id', update)
            ._handleRequest('delete', resource + '/:id', remove)
            ._handleRequest('post', resource, create);

    }
}

export default new Router;
