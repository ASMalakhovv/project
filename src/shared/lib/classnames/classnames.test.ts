import { classNames } from './classnames';

describe('classnames', () => {
    test('with only class', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass class1 class2 click error';
        expect(classNames('someClass', { click: true, error: true }, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass class1 class2 click';
        expect(classNames('someClass', { click: true, error: false }, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass class1 class2 error';
        expect(classNames('someClass', { click: undefined, error: true }, ['class1', 'class2']))
            .toBe(expected);
    });
});
