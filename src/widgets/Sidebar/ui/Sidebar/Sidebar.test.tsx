import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('In the document', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId(/sidebar-testid/i)).toBeInTheDocument();
    });

    test('Collapsed', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId(/sidebar-testid/i)).toBeInTheDocument();
        const toggleBtn = screen.getByTestId(/sidebar-toggle/i);
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId(/sidebar-testid/i)).toHaveClass('collapsed');
    });
});
