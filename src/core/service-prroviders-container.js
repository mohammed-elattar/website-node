import providers from '../config/poviders';

export default class ServiceProvidersContainer {
    serviceProviders = [];

    boot() {
        for (let i = 0; i < providers.length; i++) {
            let providerObject = new providers[i];
            this.serviceProviders.push(providerObject);
        }
    }

    registerRoutes() {
        for (let provider of this.serviceProviders) {
            if (!provider.routes) continue;
            for (let route of provider.routes) {
                route();
            }
        }
    }
}
