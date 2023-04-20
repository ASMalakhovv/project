import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'feature/AuthByUserName';

export type StateSchema = {
    counter: CounterSchema
    user: UserSchema
    loginForm: LoginSchema
};
