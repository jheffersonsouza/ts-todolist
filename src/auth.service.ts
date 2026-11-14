import {getAuthDb} from "./db";
import {UserAlreadyExistsError} from "./errors";
import {RegisterDTO} from "./index";




export class AuthService {
    private authDb = getAuthDb()

    register(registerDTO: RegisterDTO) {
        if (this.authDb.exists(registerDTO.email)) {
            throw new UserAlreadyExistsError();
        }
        // por enquanto sem has na senha
        this.authDb.add(registerDTO.email, registerDTO.password);
    }

    login() {

    }
}