import providers from '../config/poviders';
export default class ServiceProvidersContainer {
    serviceProviders = [];
    boot()
    {
        for(let i=0; i < providers.length; i++) {
            let providerObject = new providers[i];
            this.serviceProviders.push(providerObject);
        }
        console.log(this.serviceProviders);
    }
}
