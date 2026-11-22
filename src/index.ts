import { Elysia } from "elysia";
import { openapi } from '@elysia/openapi'
import {AuthService } from "./auth.service";
import {UserModel} from "./models";
import {AuthDb} from "./db";

const authDb = new AuthDb()
const authService = new AuthService(authDb);

const app = new Elysia()
    .use(openapi())
    .post("/register", {
        body: UserModel.create
    }, ({ body }) => authService.register(body))
    .post("/login", {
        body: UserModel.auth
    }, ({ body }) => authService.login(body))
    .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
