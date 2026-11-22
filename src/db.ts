import {UserModel} from "./models";

export class AuthDb {
    private users: Map<string, UserModel["user"]> = new Map(); // <email, senha>
    private jwt_list: Set<string> = new Set();

    exists(email: string) {
        return this.users.has(email);
    }

    add(name:string, email: string, password: string) {
        const jwt = this.generateJWT();
        this.users.set(email, {name, email, password, token: jwt, createdAt: new Date().toISOString()} as UserModel["user"]);
        return jwt;
    }

    get(email: string) {
        return this.users.get(email);
    }

    private generateJWT(): string {
        let jwt = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        if (this.jwt_list.has(jwt)) {
            return this.generateJWT();
        }
        this.jwt_list.add(jwt);
        return jwt;
    }
}




