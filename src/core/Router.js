class Router {
    setExpressApp(expressApp) {
        this.expressApp = expressApp;
    }

    get(route, action = [controllerName, action]) {
        this.expressApp.get(route, function (request, response) {
            let controllerObject = new action[0];
            let output = controllerObject[action[1]](request,response);

            response.send(output);
        })
    }
}

export default new Router;
