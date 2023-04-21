import { UserSchema } from 'entities/User';
import { LoginSchema } from 'feature/AuthByUserName';

export type StateSchema = {
    user: UserSchema
    loginForm: LoginSchema
};
