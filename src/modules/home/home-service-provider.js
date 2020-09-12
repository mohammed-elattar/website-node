import siteRoutes from './routes/site';
import ServiceProvider from "core/service-provider";

export default class HomeServiceProvider extends ServiceProvider{
    routes = [siteRoutes];
}

