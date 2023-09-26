import {USER_SIGN_UP} from '../constants';
import {http} from './http';

class authDataService {
  userSignUp(data: object) {
    return http.post(USER_SIGN_UP, data);
  }
}
export default new authDataService();
