import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('In document', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId(/sidebar-testid/i)).toBeInTheDocument();
    });

    test('Collapsed', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId(/sidebar-testid/i)).toBeInTheDocument();
        const toggleBtn = screen.getByTestId(/sidebar-toggle/i);
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId(/sidebar-testid/i)).toHaveClass('collapsed');
    });
});
