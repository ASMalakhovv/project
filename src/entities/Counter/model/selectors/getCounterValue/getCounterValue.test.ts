import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { getCounterValue } from '../getCounterValue/getCounterValue';

describe('getCounterValue.test', () => {
    test('correct data', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state as StateSchema)).toBe(10);
    });
});
