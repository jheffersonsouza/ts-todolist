import { Elysia, t, type UnwrapSchema } from "elysia";
import { openapi } from '@elysia/openapi'
import {AuthService } from "./auth.service";
import {UserModel} from "./models";

const authService = new AuthService();
const app = new Elysia()
    .use(openapi())
    .post("/register", {
        body: UserModel.create
    }, ({ body }) => authService.register(body))
    .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
