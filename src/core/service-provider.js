export default class ServiceProvider {
    routes = null;

    mapRouting() {
        if (!this.routes) return;
        for (let route of this.routes) {
            route();
        }
    }
}
