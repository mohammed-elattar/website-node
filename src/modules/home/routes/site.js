import {showHome, submitPage} from "../controllers/home-controller";
import router from 'core/Router';

export default function () {
    router.get('/', showHome)
        .post('/submit', submitPage)
}
