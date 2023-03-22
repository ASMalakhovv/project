import { Story } from '@storybook/react';
import { Theme, ThemeContext } from 'app/providers/ThemeProviders';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeContext.Provider value={{ theme }}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeContext.Provider>
);
