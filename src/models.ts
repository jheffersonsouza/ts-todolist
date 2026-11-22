import {t, type UnwrapSchema} from "elysia";


const password = t.String({ minLength: 8 });

const user = t.Object({
    createdAt: t.String(),
    token: t.String(),
    name: t.String(),
    email: t.String({format: "email"}),
    password: password
})


export const UserModel = {
    user,
    create: t.Omit(user, [ 'createdAt', 'token']),
    jwt:t.Omit(user, ['createdAt', 'name', 'email', 'password']),
    auth: t.Omit(user, ['createdAt', 'name', 'token'])
} as const

export type UserModel = {
    [K in keyof typeof UserModel]: UnwrapSchema<typeof UserModel[K] >
}
