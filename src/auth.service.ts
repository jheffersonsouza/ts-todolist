import {UserAlreadyExistsError} from "./errors";
import {UserModel} from "./models";
import {AuthDb} from "./db";
import {NotFound} from "elysia";




export class AuthService {
    private authDb;

    constructor(db: AuthDb) {
        this.authDb = db
    }

    register(fields: UserModel["create"]){
        if (this.authDb.exists(fields.email)) {
            throw new UserAlreadyExistsError()
        }
        // por enquanto sem hash na senha
        return {token: this.authDb.add(fields.name, fields.email, fields.password) } as UserModel["jwt"];
    }

    login(body: { email: string; password: string; }) {
        if (!this.authDb.exists(body.email)) {
            throw new NotFound()
        }
        let user = this.authDb.get(body.email) as UserModel["user"]
        if (user.password !== body.password) {
            throw new NotFound()
        }
        return { token: user.token } as UserModel["jwt"];
    }
}