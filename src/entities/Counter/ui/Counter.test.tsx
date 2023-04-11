import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { routhPath } from 'shared/config/routeConfig/routeConfig';
import { Counter } from 'entities/Counter';

describe('Counter', () => {
    test('In the document', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        expect(screen.getByTestId(/value-counter/i)).toBeInTheDocument();
    });

    test('Increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        fireEvent.click(screen.getByTestId(/btn-increment/i));
        expect(screen.getByTestId(/value-counter/i)).toHaveTextContent('11');
    });

    test('Decrement', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        fireEvent.click(screen.getByTestId(/btn-decrement/i));
        expect(screen.getByTestId(/value-counter/i)).toHaveTextContent('9');
    });
});
