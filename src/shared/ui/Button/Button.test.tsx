import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('In document', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText(/test/i)).toBeInTheDocument();
    });

    test('check class', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText(/test/i)).toHaveClass('clear');
    });
});
