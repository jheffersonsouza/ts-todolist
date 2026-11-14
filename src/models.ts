import {t, type UnwrapSchema} from "elysia";

const user = t.Object({
    id: t.String(),
    createdAt: t.String(),
    jwt: t.String(),
    name: t.String(),
    email: t.String(),
    password: t.String()
})

export const UserModel = {
    user,
    create: t.Omit(user, ['id', 'createdAt', 'jwt']),
    response: t.Omit(user, ['email','password'])
} as const

export type UserModel = {
    [K in keyof typeof UserModel]: UnwrapSchema<typeof UserModel[K] >
}
