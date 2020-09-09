import HomeController from "../controllers/home-controller";
import router from 'core/Router';

export default function () {
    router.get('/', [HomeController, 'homePage'])
}
