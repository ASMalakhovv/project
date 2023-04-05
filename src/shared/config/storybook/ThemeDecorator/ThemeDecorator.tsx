import { Story } from '@storybook/react';
import { Theme, ThemeContext } from 'app/providers/ThemeProviders';
import { useMemo } from 'react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    const memoTheme = useMemo(() => ({ theme }), [theme]);

    return (
        <ThemeContext.Provider value={memoTheme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeContext.Provider>
    );
};
