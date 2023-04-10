import { Story } from '@storybook/react';
import { Theme, ThemeContext, ThemeProvider } from 'app/providers/ThemeProviders';
import { useMemo } from 'react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
