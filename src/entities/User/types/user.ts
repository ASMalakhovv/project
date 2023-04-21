export type User = {
    id: string
    username: string
    password: string
};

export type UserSchema = {
    authData?: User
};
