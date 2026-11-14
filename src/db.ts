
class AuthDb {
    private auth_db: Map<string, string> = new Map();

    exists(email: string) {
        return this.auth_db.has(email);
    }


    add(email: string, password: string) {
        this.auth_db.set(email, password);
    }

    get(email: string) {
        return this.auth_db.get(email);
    }

}
export const getAuthDb = () => new AuthDb();
