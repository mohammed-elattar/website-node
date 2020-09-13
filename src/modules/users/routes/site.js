import router from 'core/Router';
import usersHandler from '../controllers/users-controller';

export default function () {
    router.resource('/users', usersHandler);
}
