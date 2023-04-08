import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('In document', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText(/test/i)).toBeInTheDocument();
    });

    test('check class', () => {
        render(<Button theme="clear">Test</Button>);
        expect(screen.getByText(/test/i)).toHaveClass('clear');
    });
});
